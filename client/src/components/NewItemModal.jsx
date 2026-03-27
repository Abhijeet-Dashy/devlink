import React, { useState } from 'react';
import Modal from './Modal';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

export default function NewItemModal({ isOpen, onClose, folderId, onItemCreated }) {
  const [content, setContent] = useState('');
  const [note, setNote] = useState('');
  const [type, setType] = useState('text');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const authFetch = useAuthStore(state => state.authFetch);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) {
      toast.error('Item content is required');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await authFetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({ 
          content: content.trim(), 
          note: note.trim(), 
          type, 
          folderId 
        })
      });
      const data = await response.json();
      
      if (data.success) {
        toast.success(`Item created successfully!`);
        onItemCreated(data.data);
        setContent('');
        setNote('');
        setType('text');
        onClose();
      } else {
        toast.error(data.message || 'Failed to create item');
      }
    } catch (error) {
      console.error(error);
      toast.error('Network error. Failed to create item.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Item">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Type
          </label>
          <div className="flex gap-2">
            {['text', 'link', 'image'].map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`flex-1 py-2 text-sm font-bold capitalize rounded-lg transition-colors border ${
                  type === t 
                  ? 'border-primary bg-primary/5 text-primary' 
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Content / Title
          </label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isSubmitting}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
            placeholder={type === 'link' ? "https://example.com" : type === 'image' ? "Image URL or title" : "Title..."}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Note (Optional)
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            disabled={isSubmitting}
            rows={3}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
            placeholder="Add some details..."
          />
        </div>

        <div className="flex gap-3 justify-end pt-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !content.trim()}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-white shadow-md shadow-primary/20 hover:opacity-90 disabled:opacity-50 disabled:shadow-none transition-all flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Saving...
              </>
            ) : 'Save Item'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

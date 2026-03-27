import React, { useState } from 'react';
import Modal from './Modal';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

export default function NewFolderModal({ isOpen, onClose, onFolderCreated }) {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const authFetch = useAuthStore(state => state.authFetch);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Folder name is required');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await authFetch('/api/folders', {
        method: 'POST',
        body: JSON.stringify({ name: name.trim() })
      });
      const data = await response.json();
      
      if (data.success) {
        toast.success(`Folder "${data.data.name}" created!`);
        onFolderCreated(data.data);
        setName('');
        onClose();
      } else {
        toast.error(data.message || 'Failed to create folder');
      }
    } catch (error) {
      console.error(error);
      toast.error('Network error. Failed to create folder.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Folder">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Folder Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            autoFocus
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
            placeholder="e.g. Snippets, Recipes, Architecture..."
          />
        </div>
        <div className="flex gap-3 justify-end pt-2">
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
            disabled={isSubmitting || !name.trim()}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-white shadow-md shadow-primary/20 hover:opacity-90 disabled:opacity-50 disabled:shadow-none transition-all flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Creating...
              </>
            ) : 'Create Folder'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

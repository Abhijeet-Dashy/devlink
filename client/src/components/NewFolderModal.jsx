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
    <Modal isOpen={isOpen} onClose={onClose} title="Allocate Directory">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-[9px] font-black text-black dark:text-white uppercase tracking-widest border-b-2 border-black dark:border-white pb-1">
            Directory Alias
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            autoFocus
            className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border-2 border-black dark:border-white px-3 py-2.5 text-xs font-bold text-black dark:text-white placeholder:text-gray-500 focus:shadow-[3px_3px_0_0_rgba(0,0,0,1)] dark:focus:shadow-[3px_3px_0_0_rgba(255,255,255,1)] transition-all outline-none"
            placeholder="E.G. RECIPES, DSA, SYSTEM..."
          />
        </div>
        <div className="flex gap-3 justify-end pt-3 mt-1 border-t-2 border-gray-300 dark:border-gray-700">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2 border-2 border-black dark:border-white text-black dark:text-white text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Abort
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !name.trim()}
            className="flex items-center gap-2 px-5 py-2 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest shadow-[3px_3px_0_0_rgba(0,0,0,1)] dark:shadow-[3px_3px_0_0_rgba(255,255,255,1)] hover:shadow-[5px_5px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[5px_5px_0_0_rgba(255,255,255,1)] active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50"
          >
            {isSubmitting ? 'Syncing...' : 'Allocate'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

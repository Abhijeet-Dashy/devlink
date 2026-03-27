import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

export default function Items({ isOpen, onClose, item, authFetch, onItemDeleted }) {
  const [content, setContent] = useState("");
  const [note, setNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (item) {
      setContent(item.content || "");
      setNote(item.note || "");
    }
  }, [item]);

  if (!isOpen || !item) return null;

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const res = await authFetch(`/api/items/${item._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ content, note })
      });
      if (res.ok) {
        toast.success("Item updated successfully");
        onClose(); // In a perfect world we also bubble up to update parent list, but closing is fine.
      } else {
        toast.error("Failed to update item");
      }
    } catch (err) {
      toast.error("Network error: failed to update");
      console.error("Save failed", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if(!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const res = await authFetch(`/api/items/${item._id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        toast.success("Item deleted");
        onItemDeleted(item._id);
      } else {
        toast.error("Failed to delete item");
      }
    } catch (err) {
      toast.error("Network error: failed to delete");
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/20 backdrop-blur-sm font-body">
      {/* Modal Container */}
      <div className="w-full max-w-4xl bg-surface-container-lowest rounded-xl shadow-[0px_20px_40px_rgba(43,52,55,0.08)] flex flex-col max-h-[921px] overflow-hidden border border-outline-variant/15">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-container rounded-lg text-on-primary-container">
              <span className="material-symbols-outlined text-xl">
                description
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-on-surface tracking-tight">
                {item.type.toUpperCase()} ITEM
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-on-surface-variant font-medium">
                  {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Unknown'}
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-xs text-on-surface-variant font-medium">
                  Last updated {item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'Unknown'}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors duration-200 text-on-surface-variant"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
          
          {/* Code Snippet Area */}
          <section>
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Content / Title
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => navigator.clipboard.writeText(content)}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/5 rounded-full transition-all"
                >
                  <span className="material-symbols-outlined text-sm">
                    content_copy
                  </span>
                  Copy
                </button>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-6 font-mono text-sm leading-relaxed text-on-surface/80 border border-outline-variant/5 overflow-x-auto">
              <pre>
            <div className="bg-surface-container-low rounded-xl p-6 font-mono text-sm leading-relaxed text-on-surface/80 border border-outline-variant/5">
              <textarea
                className="w-full bg-transparent border-none focus:ring-0 resize-y outline-none min-h-[150px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
              </pre>
            </div>
          </section>

          {/* Two Column Layout for Metadata & Notes */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Notes Section */}
            <div className="col-span-1 md:col-span-7">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 px-1">
                Internal Notes
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-surface-container border border-outline-variant/15 rounded-xl -z-10 transition-all duration-200 group-focus-within:ring-2 ring-primary/20"></div>
                <textarea
                  className="w-full bg-transparent border-none focus:ring-0 p-4 text-sm leading-relaxed text-on-surface min-h-[120px] placeholder:text-outline-variant/60 outline-none resize-y"
                  placeholder="Add observations or usage instructions here..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Metadata Section */}
            <div className="col-span-1 md:col-span-5 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Attributes
                </label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-outline-variant/10">
                    <span className="text-sm text-on-surface-variant">Created on</span>
                    <span className="text-sm font-medium text-on-surface">
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Unknown'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {(item.tags || []).map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-surface-container-high rounded-md text-[11px] font-semibold text-on-surface-variant">
                      {t.toUpperCase()}
                    </span>
                  ))}
                  {(!item.tags || item.tags.length === 0) && (
                    <span className="text-xs text-on-surface-variant italic">No tags</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-surface-container-low border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button onClick={handleDelete} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-error hover:bg-error/5 rounded-lg transition-colors w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined text-lg">delete</span>
            Delete Item
          </button>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button 
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Cancel
            </button>
            <button disabled={isSaving} onClick={handleSave} className="px-6 py-2 bg-primary text-on-primary font-semibold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-50">
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
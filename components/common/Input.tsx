/**
 * Input Component
 * Clean, accessible text input
 */

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Input({ label, helperText, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 bg-neutral-900 border ${
          error ? 'border-red-800' : 'border-neutral-800'
        } rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:ring-2 ${
          error ? 'focus:ring-red-800' : 'focus:ring-neutral-700'
        } transition-all ${className}`}
        {...props}
      />
      {helperText && !error && (
        <p className="mt-1 text-xs text-neutral-500">{helperText}</p>
      )}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

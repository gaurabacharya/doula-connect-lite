'use client';

import { useEffect, useState } from 'react';

type Doula = {
  id: number;
  name: string;
};

export default function BookPage() {
  const [doulas, setDoulas] = useState<Doula[]>([]);
  const [formData, setFormData] = useState({
    doulaId: '',
    name: '',
    email: '',
    date: '',
    notes: '',
  });

  useEffect(() => {
    fetch('http://localhost:8000/doulas/')
      .then(res => res.json())
      .then(data => setDoulas(data))
      .catch(console.error);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("This is a demo form. Submission is disabled.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-green-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Book a Doula</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Doula selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Doula</label>
            <select
              name="doulaId"
              value={formData.doulaId}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select a doula</option>
              {doulas.map((doula) => (
                <option key={doula.id} value={doula.id}>
                  {doula.name}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={4}
              placeholder="Let us know any special requests or details"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded w-full transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}

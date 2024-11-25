import React, { useState } from 'react';

const defaultImage =
  'https://via.placeholder.com/150'; 
const CreateVoting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('adminAuthenticated') === 'true'
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [candidates, setCandidates] = useState([
    { name: '', email: '', img: '' },
  ]);
  const [error, setError] = useState('');

  const handleAddCandidate = () => {
    setCandidates([...candidates, { name: '', email: '', img: '' }]);
  };

  const handleCandidateChange = (index, field, value) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index][field] = value;
    setCandidates(updatedCandidates);
  };

  const handleSubmit = () => {
    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }

    if (candidates.some((candidate) => !candidate.name)) {
      setError('Each candidate must have a name.');
      return;
    }

    setError('');
    const votingData = {
      title,
      description,
      candidates: candidates.map((candidate) => ({
        name: candidate.name,
        img: candidate.img || defaultImage, // Use default image if none provided
      })),
    };

    console.log('Voting Data:', votingData);
    // Submit votingData to your backend or process it further
  };

  if (!isLoggedIn) {
    return <h1 className="text-center text-red-500">Please log in to create a voting.</h1>;
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Voting</h1>

      <div className="mb-4">
        <label className="block font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Candidates</h2>
      {candidates.map((candidate, index) => (
        <div key={index} className="mb-4 border p-4 rounded">
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            value={candidate.name}
            onChange={(e) =>
              handleCandidateChange(index, 'name', e.target.value)
            }
            className="w-full px-4 py-2 border rounded mb-2"
            required
          />

          <label className="block font-semibold">Email (Optional)</label>
          <input
            type="email"
            value={candidate.email}
            onChange={(e) =>
              handleCandidateChange(index, 'email', e.target.value)
            }
            className="w-full px-4 py-2 border rounded mb-2"
          />

          <label className="block font-semibold">Image URL (Optional)</label>
          <input
            type="text"
            value={candidate.img}
            onChange={(e) =>
              handleCandidateChange(index, 'img', e.target.value)
            }
            className="w-full px-4 py-2 border rounded"
          />
        </div>
      ))}

      <button
        onClick={handleAddCandidate}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
      >
        Add Candidate
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-green-500 text-white rounded mt-4"
      >
        Create Voting
      </button>
    </div>
  );
};

export default CreateVoting;

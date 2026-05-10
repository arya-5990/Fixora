// src/hooks/useFirestore.js
// ─────────────────────────────────────────────────────────────────────────────
// Generic hook for reading a Firestore collection with real-time updates.
// Usage: const { data, loading, error } = useFirestore('users');
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';
import { subscribeToCollection } from '../firebase/firestore';

/**
 * @param {string} collectionName
 * @param {import('firebase/firestore').QueryConstraint[]} constraints
 */
export function useFirestore(collectionName, constraints = []) {
  const [data, setData]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    setLoading(true);
    const unsub = subscribeToCollection(
      collectionName,
      (docs) => {
        setData(docs);
        setLoading(false);
      },
      constraints,
    );
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName]);

  return { data, loading, error };
}

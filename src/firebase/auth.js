// src/firebase/auth.js
// ─────────────────────────────────────────────────────────────────────────────
// Reusable Firebase Auth helpers.
// ─────────────────────────────────────────────────────────────────────────────

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './config';

const googleProvider = new GoogleAuthProvider();

// ── Sign-up ───────────────────────────────────────────────────────────────────
export const registerWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// ── Sign-in ───────────────────────────────────────────────────────────────────
export const loginWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// ── Google OAuth ──────────────────────────────────────────────────────────────
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

// ── Sign-out ──────────────────────────────────────────────────────────────────
export const logout = () => signOut(auth);

// ── Password reset ────────────────────────────────────────────────────────────
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

// ── Update display name / avatar ─────────────────────────────────────────────
export const updateUserProfile = (displayName, photoURL) =>
  updateProfile(auth.currentUser, { displayName, photoURL });

// ── Auth state listener ───────────────────────────────────────────────────────
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

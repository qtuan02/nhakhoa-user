'use client';
import store from './store';
import { Provider } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setupListeners } from "@reduxjs/toolkit/query";

export function StoreProvider({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<typeof store | null>(null);

	if (!storeRef.current) {
		storeRef.current = store;
	}

	useEffect(() => {
		if (storeRef.current != null) {
		  const unsubscribe = setupListeners(storeRef.current.dispatch);
		  return unsubscribe;
		}
	  }, []);

	return (
		<Provider store={storeRef.current}>
            {children}
		</Provider>
	);
}
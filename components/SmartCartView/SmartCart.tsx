"use client";

import React, { useState } from 'react';
import { initialCartData } from './DummyCartData';
import FarmGroupItems from './FarmGroupItems';
import PaymentSummary from './PaymentSummary';

export type ItemState = {
  [id: string]: {
    quantity: number;
    isSubscribed: boolean;
  }
};

export default function SmartCart() {
  // Initialize state based on mock data
  const [itemsState, setItemsState] = useState<ItemState>(() => {
    const initialState: ItemState = {};
    initialCartData.forEach(farm => {
      farm.items.forEach(item => {
        initialState[item.id] = {
          quantity: item.quantity,
          isSubscribed: false,
        };
      });
    });
    return initialState;
  });

  const updateQuantity = (id: string, delta: number) => {
    setItemsState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: Math.max(1, prev[id].quantity + delta)
      }
    }));
  };

  const toggleSubscription = (id: string) => {
    setItemsState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isSubscribed: !prev[id].isSubscribed
      }
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left side: Cart Items by Farm */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {initialCartData.map((farm) => (
          <FarmGroupItems 
            key={farm.farmId} 
            farm={farm} 
            itemsState={itemsState}
            onUpdateQuantity={updateQuantity}
            onToggleSubscription={toggleSubscription}
          />
        ))}
      </div>

      {/* Right side: Payment Summary (Sticky) */}
      <div className="w-full lg:w-1/3">
        <div className="sticky top-6">
          <PaymentSummary farms={initialCartData} itemsState={itemsState} />
        </div>
      </div>
    </div>
  );
}

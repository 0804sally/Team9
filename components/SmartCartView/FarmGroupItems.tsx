"use client";

import React from 'react';
import { FarmOrigin } from './DummyCartData';
import { ItemState } from './SmartCart';
import { Minus, Plus, Store, CheckCircle2 } from 'lucide-react';

interface Props {
  farm: FarmOrigin;
  itemsState: ItemState;
  onUpdateQuantity: (id: string, delta: number) => void;
  onToggleSubscription: (id: string) => void;
}

export default function FarmGroupItems({ farm, itemsState, onUpdateQuantity, onToggleSubscription }: Props) {
  // Calculate farm subtotal
  const subtotal = farm.items.reduce((acc, item) => {
    const state = itemsState[item.id];
    let price = item.price;
    if (state.isSubscribed && item.isSubscriptionAvailable) {
      price = price * (1 - item.subscriptionDiscount / 100);
    }
    return acc + (price * state.quantity);
  }, 0);

  const isFreeShipping = subtotal >= farm.freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, farm.freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / farm.freeShippingThreshold) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Farm Header */}
      <div className="bg-brand-green/5 px-6 py-4 flex items-center gap-2 border-b border-gray-100">
        <Store className="w-5 h-5 text-brand-green" />
        <h3 className="text-lg font-bold text-gray-800">{farm.farmName}</h3>
      </div>
      
      {/* Items List */}
      <div className="divide-y divide-gray-50">
        {farm.items.map(item => {
          const state = itemsState[item.id];
          const hasDiscountApplied = state.isSubscribed && item.isSubscriptionAvailable;
          const currentPrice = hasDiscountApplied ? item.price * (1 - item.subscriptionDiscount / 100) : item.price;

          return (
            <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-6">
              {/* Product Image */}
              <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-medium text-gray-800">{item.name}</h4>
                  <div className="mt-2 flex items-center gap-2">
                    {hasDiscountApplied && (
                      <span className="text-xs font-bold px-2 py-1 rounded bg-brand-green/10 text-brand-green">
                        구독할인 {item.subscriptionDiscount}%
                      </span>
                    )}
                    <span className="text-lg font-bold text-gray-900">
                      {currentPrice.toLocaleString()}원
                    </span>
                    {hasDiscountApplied && (
                      <span className="text-sm text-gray-400 line-through">
                        {item.price.toLocaleString()}원
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity & Subscription Controls */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  {/* Quantity Control */}
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-1 bg-white">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 hover:bg-gray-100 rounded text-gray-600"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center font-medium text-sm">{state.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 hover:bg-gray-100 rounded text-gray-600"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Subscription Toggle */}
                  {item.isSubscriptionAvailable && (
                    <button
                      onClick={() => onToggleSubscription(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        state.isSubscribed 
                          ? 'bg-brand-green/5 text-brand-green border border-brand-green/20' 
                          : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${state.isSubscribed ? 'text-brand-green' : 'text-gray-400'}`} />
                      정기 구독 (추가 {item.subscriptionDiscount}% 할인)
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Farm Footer (Shipping Calculation) */}
      <div className="bg-gray-50 px-6 py-5 border-t border-gray-100">
        <div className="flex justify-between items-end mb-3">
          <div className="text-sm text-gray-600">
            농장 소계: <span className="font-semibold text-gray-800">{subtotal.toLocaleString()}원</span>
          </div>
          <div className="text-sm font-medium text-gray-800">
            배송비: {isFreeShipping ? <span className="text-brand-green">무료</span> : `${farm.shippingFee.toLocaleString()}원`}
          </div>
        </div>

        {/* Shipping Progress */}
        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1.5">
            {isFreeShipping ? (
              <span className="text-brand-green font-medium">✨ 무료배송 조건 달성!</span>
            ) : (
              <span className="text-gray-500">
                <span className="text-brand-green font-bold">{amountToFreeShipping.toLocaleString()}원</span> 추가 구매시 묶음 무료배송
              </span>
            )}
            <span className="text-gray-400">{farm.freeShippingThreshold.toLocaleString()}원 기준</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 rounded-full ${isFreeShipping ? 'bg-brand-green' : 'bg-brand-green/50'}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

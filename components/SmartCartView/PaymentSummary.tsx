"use client";

import React, { useState } from 'react';
import { FarmOrigin } from './DummyCartData';
import { ItemState } from './SmartCart';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  farms: FarmOrigin[];
  itemsState: ItemState;
}

export default function PaymentSummary({ farms, itemsState }: Props) {
  const [showShippingDetails, setShowShippingDetails] = useState(false);

  let totalItemsPrice = 0;
  let totalDiscount = 0;
  let totalShippingFee = 0;
  const shippingDetails: { farmName: string; fee: number }[] = [];

  farms.forEach(farm => {
    // calculate subtotal for the farm
    const farmSubtotal = farm.items.reduce((acc, item) => {
      const state = itemsState[item.id];
      // calculate original total
      const originalTotal = item.price * state.quantity;
      totalItemsPrice += originalTotal;

      let discountedPrice = item.price;
      if (state.isSubscribed && item.isSubscriptionAvailable) {
        discountedPrice = item.price * (1 - item.subscriptionDiscount / 100);
        totalDiscount += (item.price - discountedPrice) * state.quantity;
      }
      return acc + (discountedPrice * state.quantity);
    }, 0);

    // Shipping
    const finalShippingFee = farmSubtotal >= farm.freeShippingThreshold ? 0 : farm.shippingFee;
    totalShippingFee += finalShippingFee;
    shippingDetails.push({
      farmName: farm.farmName,
      fee: finalShippingFee
    });
  });

  const finalPrice = (totalItemsPrice - totalDiscount) + totalShippingFee;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">주문 요약</h3>

      <div className="space-y-4 mb-6 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>총 상품 금액</span>
          <span className="font-medium text-gray-900">{totalItemsPrice.toLocaleString()}원</span>
        </div>
        
        {totalDiscount > 0 && (
          <div className="flex justify-between text-brand-green font-medium">
            <span>정기 구독 추가 할인</span>
            <span>-{totalDiscount.toLocaleString()}원</span>
          </div>
        )}

        <div className="border-t border-gray-100 pt-4">
          <div className="flex justify-between text-gray-600 mb-2 cursor-pointer items-center" onClick={() => setShowShippingDetails(!showShippingDetails)}>
            <div className="flex items-center gap-1">
              <span>총 배송비</span>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-1 font-medium text-gray-900">
              {totalShippingFee === 0 ? '무료' : `+${totalShippingFee.toLocaleString()}원`}
              {showShippingDetails ? <ChevronUp className="w-4 h-4 text-gray-400"/> : <ChevronDown className="w-4 h-4 text-gray-400"/>}
            </div>
          </div>
          
          {/* Shipping Tooltip / Details Expand */}
          {showShippingDetails && (
            <div className="bg-gray-50 rounded-lg p-3 mt-2 text-xs space-y-2">
              <p className="text-gray-500 mb-2">산지별 배송비 부과 내역</p>
              {shippingDetails.map((detail, idx) => (
                <div key={idx} className="flex justify-between text-gray-600">
                  <span>- {detail.farmName}</span>
                  <span>{detail.fee === 0 ? '무료' : `${detail.fee.toLocaleString()}원`}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-end border-t border-gray-100 pt-6 mb-8">
        <span className="text-base font-bold text-gray-800">최종 결제 금액</span>
        <span className="text-2xl font-black text-brand-green">{finalPrice.toLocaleString()}원</span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-[#FAE100] hover:bg-[#F4D500] text-[#371D1E] font-bold py-3.5 px-4 rounded-xl transition-colors flex justify-center items-center gap-2">
          카카오페이 간편결제
        </button>
        <button className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-bold py-3.5 px-4 rounded-xl transition-colors">
          일반 결제하기
        </button>
      </div>
    </div>
  );
}

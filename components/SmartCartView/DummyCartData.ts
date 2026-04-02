export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  isSubscriptionAvailable: boolean;
  subscriptionDiscount: number; // in percentage, e.g. 5
}

export interface FarmOrigin {
  farmId: string;
  farmName: string;
  shippingFee: number;
  freeShippingThreshold: number;
  items: CartItem[];
}

export const initialCartData: FarmOrigin[] = [
  {
    farmId: 'f1',
    farmName: '청송 햇살 농원',
    shippingFee: 3000,
    freeShippingThreshold: 50000,
    items: [
      {
        id: 'i1',
        name: '당도 최고 꿀사과 5kg',
        price: 30000,
        quantity: 1,
        imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6caa6?w=200&h=200&fit=crop',
        isSubscriptionAvailable: true,
        subscriptionDiscount: 5,
      },
      {
        id: 'i2',
        name: '아침에 먹는 신선 사과즙 1박스',
        price: 15000,
        quantity: 1,
        imageUrl: 'https://images.unsplash.com/photo-1622597467836-f38240662c8b?w=200&h=200&fit=crop',
        isSubscriptionAvailable: true,
        subscriptionDiscount: 5,
      }
    ]
  },
  {
    farmId: 'f2',
    farmName: '제주 푸른 바다 감귤농장',
    shippingFee: 4000,
    freeShippingThreshold: 30000,
    items: [
      {
        id: 'i3',
        name: '서귀포 타이벡 감귤 3kg',
        price: 25000,
        quantity: 1,
        imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9db488f?w=200&h=200&fit=crop',
        isSubscriptionAvailable: true,
        subscriptionDiscount: 10,
      }
    ]
  }
];

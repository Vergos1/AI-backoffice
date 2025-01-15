export const SUBSCRIPTION_PLANS_LIST = [
  {
    plan: 'free',
    price: 0,
    features: {
      testMoneys: 300,
      benefitText: 'Referral and bonus limits per year'
    }
  },
  {
    plan: 'lite',
    price: 100,
    features: {
      testMoneys: 1000,
      benefitText: 'Referral and bonus limits per year'
    }
  },
  {
    plan: 'standard',
    price: 300,
    features: {
      testMoneys: 3000,
      benefitText: 'Referral and bonus limits per year'
    }
  },
  {
    plan: 'pro',
    price: 500,
    features: {
      testMoneys: 5000,
      benefitText: 'Referral and bonus limits per year'
    }
  },
  {
    plan: 'business',
    price: 1000,
    features: {
      testMoneys: 10000,
      benefitText: 'Referral and bonus limits per year'
    }
  },
  {
    plan: 'professional',
    price: 2000,
    features: {
      testMoneys: 22000,
      benefitText: 'Referral and bonus limits per year'
    }
  },
  {
    plan: 'premium',
    price: 3000,
    features: {
      testMoneys: 'unlimited',
      benefitText: 'Referral and bonus limits per year'
    }
  }
]

export const INVESTMENTS_TABS = [
  {
    id: 1,
    label: 'AI-Forex',
    icon: 'tabler-align-box-bottom-center',
    value: 'ai-forex'
  },
  {
    id: 2,
    label: 'AI-Pharmaceutical',
    icon: 'tabler-align-box-bottom-center',
    value: 'ai-pharmaceutical'
  },
  {
    id: 3,
    label: 'AI-IPO',
    icon: 'tabler-align-box-bottom-center',
    value: 'ai-ipo'
  },
  {
    id: 4,
    label: 'AI-Crypto-LM',
    icon: 'tabler-align-box-bottom-center',
    value: 'ai-crypto-lm'
  }
]

export const NEWS_TABS = [
  {
    id: 1,
    label: 'News',
    value: 'news'
  },
  {
    id: 2,
    label: 'Upgrade',
    value: 'upgrade',
    disabled: true
  }
]

export const INCOME_DISTRIBUTION_CARDS = [
  {
    id: 1,
    percentages: {
      start: 50,
      end: 50
    },
    minimalAmounts: {
      sgct: 80,
      swct: 20
    }
  },
  {
    id: 2,
    percentages: {
      start: 60,
      end: 40
    },
    minimalAmounts: {
      sgct: 400,
      swct: 100
    }
  },
  {
    id: 3,
    percentages: {
      start: 65,
      end: 35
    },
    minimalAmounts: {
      sgct: 1200,
      swct: 300
    }
  },
  {
    id: 4,
    percentages: {
      start: 70,
      end: 30
    },
    minimalAmounts: {
      sgct: 4000,
      swct: 1000
    }
  },
  {
    id: 5,
    percentages: {
      start: 75,
      end: 25
    },
    minimalAmounts: {
      sgct: 8000,
      swct: 2000
    }
  },
  {
    id: 6,
    percentages: {
      start: 80,
      end: 20
    },
    minimalAmounts: {
      sgct: 20000,
      swct: 5000
    }
  },
  {
    id: 7,
    percentages: {
      start: 85,
      end: 15
    },
    minimalAmounts: {
      sgct: 40000,
      swct: 10000
    }
  }
]

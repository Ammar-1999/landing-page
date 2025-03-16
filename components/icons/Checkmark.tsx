import React from 'react';

export interface CheckmarkTheme {
  primary?: string;
  secondary?: string;
}

export const CheckmarkIcon: React.FC<CheckmarkTheme> = () => {
  return <div className="checkmark-icon" />;
}; 
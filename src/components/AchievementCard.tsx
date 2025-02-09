import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Achievement } from '../types';

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon = LucideIcons[achievement.icon as keyof typeof LucideIcons];

  return (
    <div className={`p-4 rounded-lg ${
      achievement.unlocked 
        ? 'bg-white shadow-lg' 
        : 'bg-gray-100 opacity-50'
    }`}>
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${
          achievement.unlocked 
            ? 'bg-purple-100 text-purple-600' 
            : 'bg-gray-200 text-gray-400'
        }`}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
          <p className="text-sm text-gray-600">{achievement.description}</p>
          <div className="flex items-center mt-1 text-sm">
            <LucideIcons.Trophy size={14} className="text-purple-600 mr-1" />
            <span className="text-purple-600 font-medium">{achievement.xp} XP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
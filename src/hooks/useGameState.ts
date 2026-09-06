import { useState, useCallback, useRef } from 'react';
import { GameActionType, CharacterMood } from '../types';
import { gameActions, wakeUpStages, gameBoredomConfig } from '../data/gameData';
import { useLocalStorage } from './useLocalStorage';

export function useGameState() {
  const [boredom, setBoredom] = useLocalStorage<number>('bujjamma_boredom', gameBoredomConfig.initialBoredom);
  const [interactionsCount, setInteractionsCount] = useLocalStorage<number>('bujjamma_game_interactions', 0);
  const [easterEggUnlocked, setEasterEggUnlocked] = useLocalStorage<boolean>('bujjamma_boredom_easter_egg', false);

  const [currentMood, setCurrentMood] = useState<CharacterMood>('neutral');
  const [reactionText, setReactionText] = useState<string>('Touch a button below to interact!');
  const [wakeClickCount, setWakeClickCount] = useState<number>(0);
  const [isScreenShaking, setIsScreenShaking] = useState<boolean>(false);
  const [lastAction, setLastAction] = useState<GameActionType | null>(null);

  const resetTimerRef = useRef<number | null>(null);

  const triggerAction = useCallback((actionType: GameActionType) => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    setLastAction(actionType);
    setInteractionsCount((prev) => prev + 1);

    const actionConfig = gameActions.find((a) => a.type === actionType);
    const reduction = actionConfig?.boredomReduction ?? 10;

    // Apply boredom reduction (never below 0)
    setBoredom((prev) => {
      const nextVal = Math.max(0, prev - reduction);
      if (nextVal === 0 && !easterEggUnlocked) {
        setEasterEggUnlocked(true);
      }
      return nextVal;
    });

    switch (actionType) {
      case 'beat':
        setCurrentMood('knocked');
        setIsScreenShaking(true);
        setReactionText(actionConfig?.reactionMessage ?? 'Okay okay! I deserved that.');
        setTimeout(() => setIsScreenShaking(false), 500);
        resetTimerRef.current = window.setTimeout(() => setCurrentMood('neutral'), 1800);
        break;

      case 'kiss':
        setCurrentMood('blushing');
        setReactionText(actionConfig?.reactionMessage ?? 'System malfunctioning...');
        resetTimerRef.current = window.setTimeout(() => setCurrentMood('neutral'), 2000);
        break;

      case 'hug':
        setCurrentMood('hugging');
        setReactionText(actionConfig?.reactionMessage ?? 'Okay... stay like this for a while.');
        resetTimerRef.current = window.setTimeout(() => setCurrentMood('neutral'), 2200);
        break;

      case 'yell':
        setCurrentMood('nervous');
        setReactionText(actionConfig?.reactionMessage ?? 'Yes, Bujjamma.');
        resetTimerRef.current = window.setTimeout(() => setCurrentMood('neutral'), 1800);
        break;

      case 'tease':
        setCurrentMood('embarrassed');
        setReactionText(actionConfig?.reactionMessage ?? 'Stoppp...');
        resetTimerRef.current = window.setTimeout(() => setCurrentMood('neutral'), 1800);
        break;

      case 'wake': {
        const nextWakeCount = wakeClickCount + 1;
        setWakeClickCount(nextWakeCount);

        if (nextWakeCount < 4) {
          setCurrentMood('sleeping');
          const stageIndex = Math.min(nextWakeCount - 1, wakeUpStages.length - 2);
          setReactionText(wakeUpStages[stageIndex]);
          resetTimerRef.current = window.setTimeout(() => setCurrentMood('neutral'), 1500);
        } else {
          setCurrentMood('waking');
          setReactionText(wakeUpStages[wakeUpStages.length - 1]);
          setWakeClickCount(0); // reset wake count
          resetTimerRef.current = window.setTimeout(() => setCurrentMood('neutral'), 2200);
        }
        break;
      }

      case 'love':
        setCurrentMood('smiling');
        setReactionText(actionConfig?.reactionMessage ?? 'Yeah... I know.');
        resetTimerRef.current = window.setTimeout(() => setCurrentMood('neutral'), 2000);
        break;
    }
  }, [wakeClickCount, easterEggUnlocked, setBoredom, setEasterEggUnlocked, setInteractionsCount]);

  const resetBoredom = useCallback(() => {
    setBoredom(100);
    setCurrentMood('neutral');
    setReactionText('Reset! Ready for round two.');
  }, [setBoredom]);

  return {
    boredom,
    currentMood,
    reactionText,
    isScreenShaking,
    lastAction,
    interactionsCount,
    easterEggUnlocked,
    triggerAction,
    resetBoredom,
  };
}

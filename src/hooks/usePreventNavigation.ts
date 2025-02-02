import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function usePreventNavigation() {
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (to: string) => {
    if (location.pathname === '/quiz') {
      setShowExitDialog(true);
      setPendingNavigation(to);
      return false;
    }
    return true;
  };

  const handleConfirmNavigation = () => {
    if (pendingNavigation) {
      localStorage.removeItem('currentQuiz');
      navigate(pendingNavigation);
    }
    setShowExitDialog(false);
    setPendingNavigation(null);
  };

  const handleCancelNavigation = () => {
    setShowExitDialog(false);
    setPendingNavigation(null);
  };

  return {
    showExitDialog,
    handleNavigation,
    handleConfirmNavigation,
    handleCancelNavigation
  };
} 
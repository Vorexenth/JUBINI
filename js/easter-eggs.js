// 🎉 NOHS Website Easter Eggs - For the Dev Team!
// Add this script to your HTML pages: <script src="js/easter-eggs.js"></script>

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // EASTER EGG 1: Konami Code 🎮
  // Type: UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
  // ============================================
  let konamiCode = [];
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
      triggerKonamiEffect();
    }
  });
  
  function triggerKonamiEffect() {
    // Create celebration message
    const message = document.createElement('div');
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 60px;
      border-radius: 20px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      z-index: 10000;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      animation: bounceIn 0.6s;
    `;
    message.innerHTML = `
      🎮 KONAMI CODE ACTIVATED! 🎮<br>
      <span style="font-size: 16px; margin-top: 10px; display: block;">
        Congrats from the NOHS Dev Team!<br>
        You're a true gamer! 🏆
      </span>
    `;
    document.body.appendChild(message);
    
    // Add confetti effect
    createConfetti();
    
    // Remove after 4 seconds
    setTimeout(() => {
      message.style.animation = 'fadeOut 0.5s';
      setTimeout(() => message.remove(), 500);
    }, 4000);
  }
  
  // ============================================
  // EASTER EGG 2: Developer Console Message 💻
  // ============================================
  console.log('%c🏫 Welcome to NOHS Website!', 'color: #1e40af; font-size: 24px; font-weight: bold;');
  console.log('%c👨‍💻 Developed with ❤️ by:', 'color: #059669; font-size: 16px; font-weight: bold;');
  console.log('%c  • Jered Melvin Perlado (Researcher/Presenter)', 'color: #4b5563; font-size: 14px;');
  console.log('%c  • Rayzyen Gibbon Romo (Researcher/Presenter)', 'color: #4b5563; font-size: 14px;');
  console.log('%c  • Alyssa Ryzabela Compao (Designer)', 'color: #4b5563; font-size: 14px;');
  console.log('%c  • Shekkainah Romey (Leader/Designer)', 'color: #4b5563; font-size: 14px;');
  console.log('%c\n🎯 Try typing "nohs" anywhere on the page!', 'color: #dc2626; font-size: 14px; font-style: italic;');
  console.log('%c🎮 Or try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #dc2626; font-size: 14px; font-style: italic;');
  
  // ============================================
  // EASTER EGG 3: Type "NOHS" anywhere 🔤
  // ============================================
  let typedKeys = [];
  document.addEventListener('keypress', function(e) {
    typedKeys.push(e.key.toLowerCase());
    typedKeys = typedKeys.slice(-4);
    
    if (typedKeys.join('') === 'nohs') {
      showNOHSPride();
    }
  });
  
  function showNOHSPride() {
    const pride = document.createElement('div');
    pride.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
      color: white;
      padding: 20px 30px;
      border-radius: 15px;
      font-size: 18px;
      font-weight: bold;
      z-index: 10000;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      animation: slideInRight 0.5s;
    `;
    pride.innerHTML = `
      🎓 NOHS PRIDE! 🎓<br>
      <span style="font-size: 14px;">Culture of Excellence since 1902!</span>
    `;
    document.body.appendChild(pride);
    
    setTimeout(() => {
      pride.style.animation = 'slideOutRight 0.5s';
      setTimeout(() => pride.remove(), 500);
    }, 3000);
  }
  
  // ============================================
  // EASTER EGG 4: Click School Logo 5 times 🖱️
  // ============================================
  const logo = document.querySelector('.logo');
  let logoClicks = 0;
  
  if (logo) {
    logo.addEventListener('click', function(e) {
      logoClicks++;
      
      if (logoClicks === 5) {
        spinLogo();
        showDevCredits();
        logoClicks = 0; // Reset
      }
      
      // Reset counter after 2 seconds
      setTimeout(() => { logoClicks = 0; }, 2000);
    });
  }
  
  function spinLogo() {
    const logo = document.querySelector('.logo');
    logo.style.animation = 'spin 1s ease-in-out';
    setTimeout(() => { logo.style.animation = ''; }, 1000);
  }
  
  function showDevCredits() {
    const credits = document.createElement('div');
    credits.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: #00ff00;
      padding: 25px 40px;
      border-radius: 10px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      z-index: 10000;
      border: 2px solid #00ff00;
      animation: glowPulse 2s infinite;
    `;
    credits.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 16px; margin-bottom: 10px;">⚡ DEVELOPER MODE ACTIVATED ⚡</div>
        <div>// Made by Grade 12 Students</div>
        <div>// Academic Year 2025-2026</div>
        <div style="margin-top: 10px; color: #ffd700;">✨ You found the secret! ✨</div>
      </div>
    `;
    document.body.appendChild(credits);
    
    setTimeout(() => {
      credits.style.animation = 'fadeOut 0.5s';
      setTimeout(() => credits.remove(), 500);
    }, 5000);
  }
  
  // ============================================
  // EASTER EGG 5: Hold spacebar for 3 seconds 🚀
  // ============================================
  let spacebarTimer;
  let spacebarHeld = false;
  
  document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && !spacebarHeld) {
      spacebarHeld = true;
      spacebarTimer = setTimeout(() => {
        launchRocket();
      }, 3000);
    }
  });
  
  document.addEventListener('keyup', function(e) {
    if (e.code === 'Space') {
      clearTimeout(spacebarTimer);
      spacebarHeld = false;
    }
  });
  
  function launchRocket() {
    const rocket = document.createElement('div');
    rocket.innerHTML = '🚀';
    rocket.style.cssText = `
      position: fixed;
      bottom: -50px;
      left: 50%;
      font-size: 48px;
      z-index: 10000;
      animation: rocketLaunch 2s ease-in;
    `;
    document.body.appendChild(rocket);
    
    setTimeout(() => rocket.remove(), 2000);
    
    // Show message
    const message = document.createElement('div');
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 30px 50px;
      border-radius: 15px;
      font-size: 20px;
      z-index: 9999;
      text-align: center;
    `;
    message.innerHTML = `
      🚀 To infinity and beyond!<br>
      <span style="font-size: 14px; opacity: 0.8;">NOHS reaching for the stars!</span>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.style.animation = 'fadeOut 0.5s';
      setTimeout(() => message.remove(), 500);
    }, 2500);
  }
  
  // ============================================
  // Helper: Confetti Effect 🎊
  // ============================================
  function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd93d', '#95e1d3'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}%;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        opacity: 0.8;
        z-index: 9999;
        animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
      `;
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }
  }
  
  // ============================================
  // CSS Animations (injected into page)
  // ============================================
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounceIn {
      0% { transform: translate(-50%, -50%) scale(0); }
      50% { transform: translate(-50%, -50%) scale(1.1); }
      100% { transform: translate(-50%, -50%) scale(1); }
    }
    
    @keyframes fadeOut {
      to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
    
    @keyframes slideInRight {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
      to { transform: translateX(400px); opacity: 0; }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes glowPulse {
      0%, 100% { box-shadow: 0 0 10px #00ff00; }
      50% { box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
    }
    
    @keyframes rocketLaunch {
      0% { bottom: -50px; }
      100% { bottom: 120%; }
    }
    
    @keyframes confettiFall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  // ============================================
  // Secret developer info in HTML comment
  // ============================================
  console.log('%c\n<!-- 🎨 Easter Eggs Active! -->\n<!-- Developed by NOHS Grade 10 Students -->\n<!-- Keep exploring! There are 5 secrets total -->', 'color: #9333ea; font-size: 12px;');
});
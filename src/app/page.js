"use client";
import React, { useState, useRef, useEffect } from 'react';
import useDevice from './useDevice';
import Head from 'next/head';
import { VscGithub } from 'react-icons/vsc';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const device = useDevice();
  const [showDude3, setShowDude3] = useState(false);
  const [showDude3Gif, setShowDude3Gif] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [clicks, setClicks] = useState(0);
  const [animatedClicks, setAnimatedClicks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalComplete, setModalComplete] = useState(false);
  const [clickAllowed, setClickAllowed] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageType, setImageType] = useState('png');
  const [showBrokenCoin, setShowBrokenCoin] = useState(false);
  const [flash, setFlash] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState('');
  const [motivationSide, setMotivationSide] = useState('left');
  const [cps, setCps] = useState(0);
  const [showErrorhand, setShowErrorhand] = useState(false);
  const [showFinalCoin, setShowFinalCoin] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [showSigmaFace, setShowSigmaFace] = useState(false);
  const [showSigmaText, setShowSigmaText] = useState(false);
  const controls = useAnimation();

  const buttonImageRef = useRef(null);

  const firstModalBotReplies = ['ummm...', ''];
  const firstModalUserReplies = ['Click to continue'];

  const secondModalBotReplies = ['Who in tarnation are ya?', "Dang, there's been a right plenty of ya'll lately...", "Alrighty then, I reckon I got suckthin' for ya", 'Propooply nothing', ''];
  const secondModalUserReplies = ['Coinfapper', 'Yeah I know. I just want more money than I have', 'What?', 'Click to continue'];

  const thirdModalBotReplies = ["What'd ya doin? Ya done and busted my quarter!", ''];
  const thirdModalUserReplies = ['*Click to cumtime*'];

  const fourthModalBotReplies = ['DUMB DUMB DUMB!!!!', ''];
  const fourthModalUserReplies = ['*Lick to contiti*'];

  const fifthModalBotReplies = ['What in tarnation just happen?', 'Doggone it, seriously?', 'What ya waitin\' for? Push with all ya might and make me more beauty!', ''];
  const fifthModalUserReplies = ["It looks like you've gotten better looking", 'Yes, cutie', '*Poop and take a pic to continue*'];

  const sixthModalBotReplies = ['NYAAAA KAWAII!!!', "BAKA SEMPAI MITSUBISHI SUSHI!!!", ''];
  const sixthModalUserReplies = ['Yooo dude you have nice hairs!', '*Toyota sashimi*'];

  const seventhModalBotReplies = ['S0m3th1ng\'s happ3n...', 'I f33l fan7ast1c...', ''];
  const seventhModalUserReplies = ['...', '*beep to continue*'];

  const eighthModalBotReplies = ['Haha! I always knew you\'d make it to the end. You\'re one of my best puppets!', 'Every click you made released more and more energy, which I used to increase my power.', 'I want to become a god! And I will!', 'It\'s too late to do anything now. You\'ve already fulfilled your role in this adventure!', 'As a clicker, I\'ll infiltrate other users\' computers and collect even more energy. With each new clicker lover, I\'ll become stronger.', 'It\'s easier to believe fools', 'Just like you can\'t let me lose. Goodbye and thank you for your clicks to the develop my powers!', ''];
  const eighthModalUserReplies = ['What do you mean?', 'What did you want to achieve?', 'But that\'s crazy! You can\'t do that!', 'So what happens next?', 'But why did you talk like a redneck?', 'I can\'t let you do that!', 'You can\'t just leave like that!!!!'];

  useEffect(() => {
    if (device === 'mobile') {
      setShowDude3(true);
      setShowMessage(true);
      const messageText = "Howdy partner, ya gotta git yerself a proper rig to run this here contraption. Mosey on over to a desktop machine, and we'll get ya fixed up right proper.";
      let index = 0;
      const intervalId = setInterval(() => {
        setMessage(messageText.slice(0, index));
        index++;
        if (index > messageText.length) {
          clearInterval(intervalId);
          setShowDude3Gif(false);
          setTimeout(() => {
            setShowErrorhand(true);
          }, 3000);
        }
      }, 50);
    }
  }, [device]);

  const showMotivationMessage = (message, side) => {
    setMotivationMessage(message);
    setMotivationSide(side);
    setShowMotivation(true);

    setTimeout(() => {
      setShowMotivation(false);
    }, 2000);
  };

  useEffect(() => {
    if (clicks === 64) {
      showMotivationMessage('moooorrreee!!!!', 'left');
    }
  }, [clicks, showMotivationMessage]);

  useEffect(() => {
    if (clicks === 79) {
      showMotivationMessage('push mooore!!!!', 'right');
    }
  }, [clicks, showMotivationMessage]);

  useEffect(() => {
    if (clicks === 96) {
      showMotivationMessage("i like how you pushiiinnn'!!!!!!!", 'left');
    }
  }, [clicks, showMotivationMessage]);

  useEffect(() => {
    const updateRect = () => {
      if (buttonImageRef.current) {
        const rect = buttonImageRef.current.getBoundingClientRect();
        setRect(rect);
      }
    };
    updateRect();
    window.addEventListener('resize', updateRect);
    return () => window.removeEventListener('resize', updateRect);
  }, [clicks]);

  const [rect, setRect] = useState({});

  useEffect(() => {
    if (clicks === 5) {
      setShowModal(true);
      setClickAllowed(false);
      const message = firstModalBotReplies[0];
      let currentIndex = 0;

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndex + 1));
        currentIndex = (currentIndex + 1) % message.length;

        if (currentIndex === 0) {
          clearInterval(interval);
          setModalComplete(true);
          setCurrentIndex(0);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [clicks]);


  useEffect(() => {
    if (clicks === 8) {
      setShowModal(true);
      setClickAllowed(false);
      const message = secondModalBotReplies[0];
      let currentIndex = 0;

      setImageType('gif');

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndex + 1));
        currentIndex = (currentIndex + 1) % message.length;

        if (currentIndex === message.length - 1) {
          setImageType('png');
        }

        if (currentIndex === 0) {
          clearInterval(interval);
          setModalComplete(true);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [clicks]);

  useEffect(() => {
    if (clicks === 24) {
      setShowModal(true);
      setClickAllowed(false);
      const message = thirdModalBotReplies[0];
      let currentIndex = 0;

      setImageType('gif');

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndex + 1));
        currentIndex = (currentIndex + 1) % message.length;

        if (currentIndex === message.length - 1) {
          setImageType('png');
        }

        if (currentIndex === 0) {
          clearInterval(interval);
          setModalComplete(true);
          setCurrentIndex(0);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [clicks]);

  useEffect(() => {
    if (clicks === 40) {
      setShowModal(true);
      setClickAllowed(false);
      const message = fourthModalBotReplies[0];
      let currentIndex = 0;

      setImageType('gif');

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndex + 1));
        currentIndex = (currentIndex + 1) % message.length;

        if (currentIndex === message.length - 1) {
          setImageType('png');
        }

        if (currentIndex === 0) {
          clearInterval(interval);
          setModalComplete(true);
          setCurrentIndex(0);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [clicks]);

  useEffect(() => {
    if (clicks === 50) {
      setFlash(true);
      setClickAllowed(false);
      setTimeout(() => {
        setFlash(false);
      }, 5000);
      setShowBrokenCoin(true);
      setTimeout(() => {
        setShowModal(true);
        const message = fifthModalBotReplies[0];
        let currentIndex = 0;

        setImageType('gif');

        const interval = setInterval(() => {
          setModalText(message.substring(0, currentIndex + 1));
          currentIndex = (currentIndex + 1) % message.length;

          if (currentIndex === message.length - 1) {
            setImageType('png');
          }

          if (currentIndex === 0) {
            clearInterval(interval);
            setModalComplete(true);
            setCurrentIndex(0);
          }
        }, 50);

        setShowBrokenCoin(false);

        return () => clearInterval(interval);
      }, 3000);
    }
  }, [clicks]);

  useEffect(() => {
    if (clicks === 114) {
      setFlash(true);
      setClickAllowed(false);
      setTimeout(() => {
        setFlash(false);
      }, 5000);

      setTimeout(() => {
        setShowModal(true);
        const message = sixthModalBotReplies[0];
        let currentIndex = 0;

        setImageType('gif');

        const interval = setInterval(() => {
          setModalText(message.substring(0, currentIndex + 1));
          currentIndex = (currentIndex + 1) % message.length;

          if (currentIndex === message.length - 1) {
            setImageType('png');
          }

          if (currentIndex === 0) {
            clearInterval(interval);
            setModalComplete(true);
            setCurrentIndex(0);
          }
        }, 50);

        return () => clearInterval(interval);
      }, 3000);
    }
  }, [clicks]);

  useEffect(() => {
    if (clicks === 154) {
      setShowModal(true);
      setFlash(true);
      setClickAllowed(false);
      setTimeout(() => {
        setFlash(false);
      }, 5000);
      const message = seventhModalBotReplies[0];
      let currentIndex = 0;

      setImageType('gif');

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndex + 1));
        currentIndex = (currentIndex + 1) % message.length;

        if (currentIndex === message.length - 1) {
          setImageType('png');
        }

        if (currentIndex === 0) {
          clearInterval(interval);
          setModalComplete(true);
          setCurrentIndex(0);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [clicks]);

  useEffect(() => {
    if (clicks === 271) {
      setShowFinalCoin(true);
      setTimeout(() => {
        setShowFinalCoin(false);
        setShowBlackScreen(true);
      }, 1000);
      setTimeout(() => {
        setShowModal(true);
      }, 2000);

      const message = eighthModalBotReplies[0];
      let currentIndex = 0;

      setImageType('gif');

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndex + 1));
        currentIndex = (currentIndex + 1) % message.length;

        if (currentIndex === message.length - 1) {
          setImageType('png');
        }

        if (currentIndex === 0) {
          clearInterval(interval);
          setModalComplete(true);
          setCurrentIndex(0);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [clicks]);

  const prevClickTimeRef = useRef(0);

  const handleButtonClick = (event) => {
    if (!clickAllowed) {
      return;
    }

    const currentClickTime = event.timeStamp;
    const timeDiff = currentClickTime - prevClickTimeRef.current;

    if (timeDiff > 0 && timeDiff <= 1000) {
      const newCps = 1000 / timeDiff;
      setCps(newCps.toFixed(2));
    } else {
      setCps(0);
    }

    prevClickTimeRef.current = currentClickTime;

    setClicks(prevClicks => prevClicks + 1);

    if (clicks >= 9 && clicks < 49) {
      const newProgress = (clicks + 1 - 9) / 40 * 100;
      setProgress(newProgress);
    } else if (clicks === 49) {
      const timer = setInterval(() => {
        setProgress(prevProgress => prevProgress + 1);

        if (progress >= 100) {
          clearInterval(timer);
        }
      }, 10);
    }

    if (rect && rect.width) {
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      const newClick = { x, y, opacity: 1 };
      setAnimatedClicks([...animatedClicks, newClick]);

      controls.start({
        opacity: 0,
        y: y - 50,
        transition: { duration: 0.5 },
      });
    }
  };

  const handleModalClick = () => {
    setShowModal(false);
    setModalText('');
    setModalComplete(false);

    if (clicks === 272) {
      setTimeout(() => {
        setShowSigmaFace(true);
      }, 2000);
      setTimeout(() => {
        setShowSigmaText(true);
      }, 4000);
    }

    if (clicks === 5 || clicks === 24 || clicks === 40) {
      setClickAllowed(true);
    } else if (clicks === 8 && currentIndex < secondModalBotReplies.length - 1 && currentIndex < secondModalUserReplies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowModal(true);
      setImageType('gif');

      const message = secondModalBotReplies[currentIndex + 1];
      let currentIndexMessage = 0;

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndexMessage + 1));
        currentIndexMessage = (currentIndexMessage + 1) % message.length;

        if (currentIndexMessage === message.length - 1) {
          setImageType('png');
        }

        if (currentIndexMessage === 0) {
          clearInterval(interval);

          if (currentIndex === secondModalUserReplies.length - 2) {
            setClicks(prevClicks => prevClicks + 1);
            setClickAllowed(true);
          }

          if (currentIndex < secondModalBotReplies.length - 2) {
            setTimeout(() => {
              setModalComplete(true);
            }, 100);
          } else {
            setShowModal(false);
            setClickAllowed(true);
            setClicks(prevClicks => prevClicks + 1);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (clicks === 24 && currentIndex < thirdModalBotReplies.length - 1 && currentIndex < thirdModalUserReplies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowModal(true);
      setImageType('gif');

      const message = thirdModalBotReplies[currentIndex + 1];
      let currentIndexMessage = 0;

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndexMessage + 1));
        currentIndexMessage = (currentIndexMessage + 1) % message.length;

        if (currentIndexMessage === message.length - 1) {
          setImageType('png');
        }

        if (currentIndexMessage === 0) {
          clearInterval(interval);

          if (currentIndex === thirdModalUserReplies.length - 2) {
            setClicks(prevClicks => prevClicks + 1);
            setClickAllowed(true);
          }

          if (currentIndex < thirdModalBotReplies.length - 2) {
            setTimeout(() => {
              setModalComplete(true);
            }, 100);
          } else {
            setShowModal(false);
            setClickAllowed(true);
            setClicks(prevClicks => prevClicks + 1);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (clicks === 40 && currentIndex < fourthModalBotReplies.length - 1 && currentIndex < fourthModalUserReplies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowModal(true);
      setImageType('gif');

      const message = fourthModalBotReplies[currentIndex + 1];
      let currentIndexMessage = 0;

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndexMessage + 1));
        currentIndexMessage = (currentIndexMessage + 1) % message.length;

        if (currentIndexMessage === message.length - 1) {
          setImageType('png');
        }

        if (currentIndexMessage === 0) {
          clearInterval(interval);

          if (currentIndex === fourthModalUserReplies.length - 2) {
            setClicks(prevClicks => prevClicks + 1);
            setClickAllowed(true);
          }

          if (currentIndex < fourthModalBotReplies.length - 2) {
            setTimeout(() => {
              setModalComplete(true);
            }, 100);
          } else {
            setShowModal(false);
            setClickAllowed(true);
            setClicks(prevClicks => prevClicks + 1);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (clicks === 50 && currentIndex < fifthModalBotReplies.length - 1 && currentIndex < fifthModalUserReplies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowModal(true);
      setImageType('gif');

      const message = fifthModalBotReplies[currentIndex + 1];
      let currentIndexMessage = 0;

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndexMessage + 1));
        currentIndexMessage = (currentIndexMessage + 1) % message.length;

        if (currentIndexMessage === message.length - 1) {
          setImageType('png');
        }

        if (currentIndexMessage === 0) {
          clearInterval(interval);

          if (currentIndex === fifthModalUserReplies.length - 2) {
            setClicks(prevClicks => prevClicks + 1);
            setClickAllowed(true);
          }

          if (currentIndex < fifthModalBotReplies.length - 2) {
            setTimeout(() => {
              setModalComplete(true);
            }, 100);
          } else {
            setShowModal(false);
            setClickAllowed(true);
            setClicks(prevClicks => prevClicks + 1);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (clicks === 114 && currentIndex < sixthModalBotReplies.length - 1 && currentIndex < sixthModalUserReplies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowModal(true);
      setImageType('gif');

      const message = sixthModalBotReplies[currentIndex + 1];
      let currentIndexMessage = 0;

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndexMessage + 1));
        currentIndexMessage = (currentIndexMessage + 1) % message.length;

        if (currentIndexMessage === message.length - 1) {
          setImageType('png');
        }

        if (currentIndexMessage === 0) {
          clearInterval(interval);

          if (currentIndex === sixthModalUserReplies.length - 2) {
            setClicks(prevClicks => prevClicks + 1);
            setClickAllowed(true);
          }

          if (currentIndex < sixthModalBotReplies.length - 2) {
            setTimeout(() => {
              setModalComplete(true);
            }, 100);
          } else {
            setShowModal(false);
            setClickAllowed(true);
            setClicks(prevClicks => prevClicks + 1);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (clicks === 154 && currentIndex < seventhModalBotReplies.length - 1 && currentIndex < seventhModalUserReplies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowModal(true);
      setImageType('gif');

      const message = seventhModalBotReplies[currentIndex + 1];
      let currentIndexMessage = 0;

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndexMessage + 1));
        currentIndexMessage = (currentIndexMessage + 1) % message.length;

        if (currentIndexMessage === message.length - 1) {
          setImageType('png');
        }

        if (currentIndexMessage === 0) {
          clearInterval(interval);

          if (currentIndex === seventhModalUserReplies.length - 2) {
            setClicks(prevClicks => prevClicks + 1);
            setClickAllowed(true);
          }

          if (currentIndex < seventhModalBotReplies.length - 2) {
            setTimeout(() => {
              setModalComplete(true);
            }, 100);
          } else {
            setShowModal(false);
            setClickAllowed(true);
            setClicks(prevClicks => prevClicks + 1);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (clicks === 271 && currentIndex < eighthModalBotReplies.length - 1 && currentIndex < eighthModalUserReplies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowModal(true);
      setImageType('gif');

      const message = eighthModalBotReplies[currentIndex + 1];
      let currentIndexMessage = 0;

      const interval = setInterval(() => {
        setModalText(message.substring(0, currentIndexMessage + 1));
        currentIndexMessage = (currentIndexMessage + 1) % message.length;

        if (currentIndexMessage === message.length - 1) {
          setImageType('png');
        }

        if (currentIndexMessage === 0) {
          clearInterval(interval);

          if (currentIndex === eighthModalUserReplies.length - 2) {
            setClicks(prevClicks => prevClicks + 1);
            setClickAllowed(true);
          }

          if (currentIndex < eighthModalBotReplies.length - 2) {
            setTimeout(() => {
              setModalComplete(true);
            }, 100);
          } else {
            setShowModal(false);
            setClickAllowed(true);
            setShowCoinAfterDialog(true);
            setClicks(prevClicks => prevClicks + 1);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    }
  };

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center py-2 bg-black ${showModal && !modalComplete ? 'pointer-events-none' : ''} ${flash ? 'flash' : ''}`}>
      {clicks >= 154 && clicks <= 160 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {clicks >= 161 && clicks <= 166 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken2.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {clicks >= 167 && clicks <= 174 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken3.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {clicks >= 175 && clicks <= 185 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken4.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {clicks >= 186 && clicks <= 200 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken5.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {clicks >= 201 && clicks <= 215 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken6.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {clicks >= 215 && clicks <= 240 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken7.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {clicks >= 241 && clicks <= 254 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken8.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {clicks >= 255 && clicks <= 270 && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/broken9.png" alt="Broken Coin Background" className="w-full h-full object-cover" />
        </div>
      )}
      {showDude3 && (
        <div className="modal-backdrop">
          <div className="fixed bottom-0 left-0 w-full bg-transparent z-index-9999">
            <div className="flex flex-col items-center justify-center p-2">
              {showMessage && (
                <div className="relative speech-bubble">
                  <div className="absolute speech-bubble-tail"></div>
                  <div className="speech-bubble-text">
                    {message}
                  </div>
                </div>
              )}
              {showDude3Gif && (
                <img src="/dude3.gif" alt="character" className="fixed bottom-0 right-0 dude3-image" />
              )}
              {!showDude3Gif && (
                <>
                  <img src="/dude2.png" alt="character" className="fixed bottom-0 right-0 dude3-image" />
                  {showErrorhand && (
                    <img src="/errorhand.png" alt="errorhand" className="fixed bottom-0 right-50 errorhand-image slide-up" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Head>
        <title>Not WebApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
        {clicks < 9 ? (
          <div
            className="text-3xl text-gray-500 cursor-pointer"
            onClick={handleButtonClick}
            onMouseDown={(e) => e.preventDefault()}
            onDoubleClick={(e) => e.preventDefault()}
          >
            There must be something here.
          </div>
        ) : (
          <div className="relative rounded-full w-[400px] h-[400px]">
            <button
              onClick={handleButtonClick}
              onDoubleClick={(e) => e.preventDefault()}
              className="button-image absolute inset-0 flex items-center justify-center"
            >
              {showBrokenCoin && clicks === 50 ? (
                <img
                  src="/brokencoin.png"
                  alt="not"
                  className="max-w-full max-h-full rounded-full"
                  draggable="false"
                  user-select="none"
                />
              ) : (
                <img
                  ref={buttonImageRef}
                  src={(clicks >= 9 && clicks <= 23) ? "/shitcoin.png" : (clicks >= 24 && clicks <= 39) ? "/shitcoin2.png" : (clicks >= 40 && clicks <= 49) ? "/shitcoin3.png" : (clicks >= 114 && clicks <= 153 && cps >= 0 && cps < 6) ? "/coinnya1.png" : (clicks >= 114 && clicks <= 153 && cps >= 6) ? "/coinnya2.png" : (clicks >= 154 && clicks <= 186) ? "/neweracoin1.png" : (clicks >= 187 && clicks <= 225) ? "/neweracoin2.png" : (clicks >= 226 && clicks <= 270) ? "/neweracoin3.png" : (clicks >= 50 && clicks <= 113) ? "/coin.webp" : ""}
                  alt="not"
                  className="max-w-full max-h-full rounded-full"
                  draggable="false"
                  user-select="none"
                />
              )}
            </button>
            {animatedClicks.map((click, index) => (
              <motion.div
                key={index}
                initial={{ x: rect.width / 2 + click.x, y: rect.height / 2 + click.y, opacity: 1 }}
                animate={{
                  y: click.y - 100,
                  opacity: 0,
                  transition: { duration: 0.5 },
                }}
                className="absolute text-white font-bold text-2xl user-select-none"
                onMouseDown={(e) => e.preventDefault()}
                onDoubleClick={(e) => e.preventDefault()}
              >
                +1
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed bottom-20 left-0 right-0 z-20 bg-gray-900 p-4 text-white w-1/3 mx-auto pointer-events-auto">
          <div className="flex items-center">
            {imageType === 'png' ? (
              <img src={clicks === 8 || clicks === 24 || clicks === 40 ? "/dude.png" : clicks === 9 ? "/dude.png" : clicks === 50 || clicks === 51 ? "/dude3.png" : clicks === 114 || clicks === 115 ? "/dude4.png" : clicks === 154 || clicks === 155 || clicks === 271 || clicks === 272 ? "/dude5.png" : "/dude.gif"} alt="character" className="w-16 h-16 mr-4 object-fit-contain" />
            ) : (
              <img src={clicks === 8 || clicks === 24 || clicks === 40 ? "/dude2.gif" : clicks === 9 ? "/dude2.gif" : clicks === 50 || clicks === 51 ? "/dude4.gif" : clicks === 114 || clicks === 115 ? "/dude5.gif" : clicks === 154 || clicks === 155 || clicks === 271 || clicks === 272 ? "/dude6.gif" : "/dude.gif"} alt="character" className="w-16 h-16 mr-4 object-fit-contain" />
            )}
            <div>
              <p>{modalText}</p>
              {modalComplete && currentIndex < (
                clicks === 5 ? firstModalBotReplies.length :
                  clicks === 24 ? thirdModalBotReplies.length :
                    clicks === 40 ? fourthModalBotReplies.length :
                      clicks === 50 ? fifthModalBotReplies.length :
                        clicks === 114 ? sixthModalBotReplies.length :
                          clicks === 154 ? seventhModalBotReplies.length :
                            clicks === 271 ? eighthModalBotReplies.length :
                              clicks === 272 ? eighthModalBotReplies.length :
                                secondModalBotReplies.length) - 1 ? (
                <p className="mt-2 text-yellow-500 cursor-pointer" onClick={handleModalClick}>
                  {clicks === 5 ? firstModalUserReplies[currentIndex] :
                    clicks === 24 ? thirdModalUserReplies[currentIndex] :
                      clicks === 40 ? fourthModalUserReplies[currentIndex] :
                        clicks === 50 ? fifthModalUserReplies[currentIndex] :
                          clicks === 51 ? fifthModalUserReplies[currentIndex] :
                            clicks === 114 ? sixthModalUserReplies[currentIndex] :
                              clicks === 115 ? sixthModalUserReplies[currentIndex] :
                                clicks === 154 ? seventhModalUserReplies[currentIndex] :
                                  clicks === 155 ? seventhModalUserReplies[currentIndex] :
                                    clicks === 271 ? eighthModalUserReplies[currentIndex] :
                                      clicks === 272 ? eighthModalUserReplies[currentIndex] :
                                        secondModalUserReplies[currentIndex]}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      )}
      {showMotivation && (
        <div
          className={`fixed ${motivationSide === 'left' ? 'left-8' : 'right-8'} top-0 z-50 w-64 h-24 bg-black rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out transform ${showMotivation ? 'motivation-enter' : 'motivation-exit'}`}
          style={{ opacity: showMotivation ? 1 : 0 }}
        >
          <img src="/dude4.gif" alt="dude" className="w-16 h-16 mb-2" />
          <p className="text-white text-center">{motivationMessage}</p>
        </div>
      )}

      {showFinalCoin && (
        <div className="absolute top-50 left-50 w-100 h-100">
          <img src="/finalcoin.gif" alt="Final Coin Background" className="w-full h-full object-cover" />
        </div>
      )}

      {showBlackScreen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center">
          {showSigmaFace && (
            <img src="/sigmaface.png" alt="Final Coin Background" className="w-full max-w-xl h-full max-h-xl object-cover2" />
          )}
          {showSigmaText && (
            <div className="w-full max-w-xl px-4 pb-4">
              <p className="mt-10 text-center text-gray-300 text-5xl">The End</p>
              <p className="mt-10 text-center text-gray-300 text-2xl">Was made special for NOT ART contest</p>
              <p className="mt-2 text-center text-gray-300 text-2xl">Notcoin 2.0 now on{" "}
                <a href="https://t.me/notcoin_bot" target="_blank" rel="noopener noreferrer" className="text-white underline">
                  @notcoin_bot
                </a>{" "}
                in Telegram</p>
            </div>
          )}
        </div>
      )}

      <footer className="fixed bottom-0 w-full h-16 flex items-center justify-center">
        <a
          className="mx-4 text-gray-500 hover:text-gray-400"
          href="https://github.com/cloverfield11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithub size={32} />
        </a>
        <a
          className="mx-4 text-gray-500 hover:text-gray-400"
          href="https://t.me/cloverfield11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane size={32} />
        </a>
        <a
          className="mx-4 text-gray-500 hover:text-gray-400"
          href="https://x.com/kennyory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitterX size={32} />
        </a>
      </footer>
    </div>
  );
}
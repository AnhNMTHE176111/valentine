import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const images = import.meta.glob("/src/assets/images/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const LovePage = () => {
  const [balloonImages, setBalloonImages] = useState([]);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      isMusicPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isMusicPlaying]);

  useEffect(() => {
    setBalloonImages(Object.values(images).map((img) => img.default));
  }, []);

  return (
    <div className="container">
      <>
        <audio ref={audioRef} loop>
          <source src="/src/assets/audio/romantic.mp3" type="audio/mpeg" />
        </audio>
        <button
          className="music-button"
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
        >
          {isMusicPlaying ? "🔇 Tắt nhạc" : "🎵 Bật nhạc"}
        </button>
      </>

      {/* Trái tim lớn - Khi click sẽ mở thư */}
      <motion.div
        className="heart"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => setIsLetterOpen(true)}
      >
        ❤️
      </motion.div>
      <h1 className="text">Anh yêu Nguyệt 💖</h1>

      {/* Bóng bay */}
      <div className="balloons">
        {balloonImages.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            className="balloon"
            alt="balloon"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: -500, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 1 }}
          />
        ))}
      </div>

      {/* Hiển thị thư khi click vào trái tim */}
      <AnimatePresence>
        {isLetterOpen && (
          <motion.div
            className="letter-container"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="letter">
              <div className="letter-header">💌 Gửi Nguyệt yêu dấu 💌</div>
              <div className="letter-body">
                <p>
                  Vậy là chúng ta đã iu nhau được một thời gian khá dài. Gấu rất
                  vui vì chúng mình đã cùng vì nhau thay đổi, vượt qua nhiều khó
                  khăn và đến hiện tại chúng mình vẫn yêu nhau nồng nhiệt như
                  hồi mới yêu.
                </p>
                <p>
                  Gấu hi vọng chúng ta sẽ vẫn trẻ cùng nhau như vậy mãi. Chúc
                  mừng Valentine nhé Tình yêu của anh 💖!
                </p>
                <p className="signature">Gấu yêu Nguyệt</p>
              </div>
              <button
                className="close-button"
                onClick={() => setIsLetterOpen(false)}
              >
                Đóng
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LovePage;

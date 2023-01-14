import { Inter } from "@next/font/google";
import styles from "../../../styles/Arithmetic.module.css";
import { ArithmeticType, useParams } from "./hooks";

const inter = Inter({ subsets: ["latin"] });

const Arithmetic = () => {
  const { answer, changeMode, isStarted, num1, num2, proceed, start } =
    useParams();

  return (
    <main className={`${styles.main} ${inter.className}`}>
      {!isStarted && (
        <div className={styles.description} onClick={start}>
          <p>Tap the formula to proceed.</p>
        </div>
      )}

      <div className={styles.center} onClick={proceed}>
        <div className={styles.numbers}>{num1}</div>x
        <div className={styles.numbers}>{num2}</div>=
        <div className={styles.answer}>{answer || "?"}</div>
      </div>

      <div className={styles.grid}>
        <div
          className={styles.card}
          onClick={changeMode}
          data-mode={ArithmeticType.MUL_BY_11}
        >
          <h2>
            2-digits <span>x</span> 11
          </h2>
          <p>13x11, 83x11...</p>
        </div>

        <div
          className={styles.card}
          onClick={changeMode}
          data-mode={ArithmeticType.MUL_OF_TOTAL_10_COMBINATION}
        >
          <h2>
            square of 2-digits
            <br />
            <span>sum of these last digits is 10</span>
          </h2>
          <p>15x15, 25x25... and 31x39, 32x38...</p>
        </div>

        <div
          className={styles.card}
          onClick={changeMode}
          data-mode={ArithmeticType.SQUARE}
        >
          <h2>square of 2-digits</h2>
          <p>24x24, 77x77...</p>
        </div>
      </div>
    </main>
  );
};

export default Arithmetic;

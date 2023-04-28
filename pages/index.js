import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

const stakingContractAddress = "0xaA9D9a8f810463f24825c05f3075c1Fc6a430430";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to NFTE token staking rewards!
        </h1>

        <p className={styles.description}>
          Get started by staking your $NFTE tokens.
          <code className={styles.code}>pages/_app.js</code>, then watch your $ARB rewards grow!
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://arbiscan.io/" className={styles.card}>
            <h2>Arbiscan &rarr;</h2>
            <p>
              Arbitrum block explorer
            </p>
          </a>

          <a href="https://docs.nftearth.exchange" className={styles.card}>
            <h2>Docs &rarr;</h2>
            <p>
              NFTEarth docs
            </p>
          </a>

          <a
            href="https://nftearth.exchange"
            className={styles.card}
          >
            <h2>Marketplace &rarr;</h2>
            <p>
              Trade NFTs on L2
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

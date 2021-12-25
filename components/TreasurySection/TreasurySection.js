import styles from './TreasurySection.module.css';

const TreasurySection = () => {
	return (
		<section className={styles.TreasurySection}>
      <h2 
      	className={[
      		styles.SectionHeading, 
      		styles.TreasurySectionHeading
      	].join(' ')}
      >
      	DIOCESAN TREASURY
      </h2>
      <ol className={styles.TreasuryList}>
        <li className={styles.TreasuryItem}>
          <div 
          	className={[
          		styles.TreasuryItemText, 
          		styles.TextCenter
          	].join(' ')}
          >
          	Payable accounts
          </div>
          <button className={styles.TreasuryItemButton}>View</button>
        </li>
        <li className={styles.TreasuryItem}>
          <div 
          	className={[
          		styles.TreasuryItemText, 
          		styles.TextCenter
          	].join(' ')}
          >
          	Accounting system
          </div>
          <button className={styles.TreasuryItemButton}>Download</button>
        </li>
        <li className={styles.TreasuryItem}>
          <div 
          	className={[
          		styles.TreasuryItemText, 
          		styles.TextCenter
          	].join(' ')}
          >
          	Donate
          </div>
          <button className={styles.TreasuryItemButton}>Donate</button>
        </li>
        <li className={styles.TreasuryItem}>
          <div className={styles.TreasuryItemText}>
            <div className={styles.AccountPurpose}>Investment </div>
            <div className={styles.AccountNumber}>1017391594 </div>
            <div className={styles.AccountBank}>Zenith bank</div></div>
        </li>
        <li className={styles.TreasuryItem}>
          <div className={styles.TreasuryItemText}>
            <div className={styles.AccountPurpose}>Assessment </div>
            <div className={styles.AccountNumber}>0121845799 </div>
            <div className={styles.AccountBank}>Wema bank</div></div>
        </li>
        <li className={styles.TreasuryItem}>
          <div className={styles.TreasuryItemText}>
            <div className={styles.AccountPurpose}>Evangelism </div>
            <div className={styles.AccountNumber}>0121845799 </div>
            <div className={styles.AccountBank}>Wema bank</div></div>
        </li>
        <li className={styles.TreasuryItem}>
          <div className={styles.TreasuryItemText}>
            <div className={styles.AccountPurpose}>Tithe of Tithes </div>
            <div className={styles.AccountNumber}>0226779528 </div>
            <div className={styles.AccountBank}>Wema bank</div></div>
        </li>
        <li className={styles.TreasuryItem}>
          <div className={styles.TreasuryItemText}>
            <div className={styles.AccountPurpose}>Special Sunday Collections </div>
            <div className={styles.AccountNumber}>0121845799 </div>
            <div className={styles.AccountBank}>Wema bank</div></div>
        </li>
        <li className={styles.TreasuryItem}>
          <div className={styles.TreasuryItemText}>
            <div className={styles.AccountPurpose}>5% Priests & Church Pension Contributions </div>
            <div className={styles.AccountNumber}>0226781237 </div>
            <div className={styles.AccountBank}>Wema bank</div></div>
        </li>
        <li className={styles.TreasuryItem}>
          <div className={styles.TreasuryItemText}>
            <div className={styles.AccountPurpose}>Mission Seed </div>
            <div className={styles.AccountNumber}>0147803343 </div>
            <div className={styles.AccountBank}>GTB</div></div>
        </li>
        <li className={styles.TreasuryItem}>
          <div className={styles.TreasuryItemText}>
            <div className={styles.AccountPurpose}>All Collections </div>
            <div className={styles.AccountNumber}>4090929967 </div>
            <div className={styles.AccountBank}>Polaris bank</div></div>
        </li>
      </ol>
     </section>
	)
}

export default TreasurySection;
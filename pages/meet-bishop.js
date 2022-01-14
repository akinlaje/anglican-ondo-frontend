import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/MeetBishop.module.css';

const MeetBishop = () => {
	return (
		<>
			<header className={styles.Header}>
        <Head>
          <title>Meet Bishop | Anglican Diocese of Ondo</title>
          <meta name="description" content="Bishop of the Anglican diocese of Ondo" />
          <link rel="icon" href="/images/diocese-logo.png" />
        </Head>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Meet the Bishop</h1>
					<p>Rt. Revd. Stephen Adeniran Oni. <span className='faded'>PhD, Mcasson</span></p>
				</div>
			</header>
			<section className={styles.CurrentBishopSection}>
				<div className={styles.MainImageWrapper}>
					<div className={styles.MainImage} style={{ position: 'relative' }}>
						<Image layout='fill' objectFit='contain'  alt='bishop' src='/images/bishop-oni.png'  />
					</div>
				</div>
				<div className={styles.MainTextWrapper}>
					<h3 className={styles.MainTextHeading}>Rt. Revd. Stephen Adeniran Oni, PhD, Mcasson</h3>
					<div className='faded'>Bishop, Diocese of Ondo.</div>
					<p className={styles.MainText}>
						The Rt. Revd. Stephen Adeniran Oni hails from Ondo West Local Government Area 
						of Ondo State. He was born in Ondo less than five decades ago to the family of 
						Prince Samuel Adedeji Oni, whose parents hail from the “JILO” and Tewogboye Royal 
						dynasty of Ondo Kingdom, and Mrs. Stella A. Oni of the great ‘Jomo’ family of Ondo 
						Kingdom.
					</p>
					<p className={styles.MainText}>
						As a young lad, he started his primary education at Army Children School in the 
						Old Bendel State. After attending so many other primary schools, some of which are: 
						St. Richard’s Catholic Primary School, Ibadan and Holy Trinity Primary School, 
						Ondo due to the nature of the father’s job. He eventually completed his secondary 
						education at Eleyele Secondary School, Ibadan.
					</p>
					<p className={styles.MainText}>
						He had a personal encounter of receiving Jesus Christ as his Lord and personal 
						Saviour in his secondary school days in the hostel more than three decade ago 
						and has been continuously sustained by his grace in his pilgrimage as he journey 
						on in his walk with the Lord.
					</p>
					<p className={styles.MainText}>
						‘Bro Steve’ as fondly called by his comrades was involved in various Church group activities such as the Choir, the Anglican Youth Fellowship, etc. where he was actively involved as a youth worker among the evangelical team to various places both within and outside the Diocese.
					</p>
					<p className={styles.MainText}>
						He heard the call of God upon his life early enough in the year 1992 but was of the opinion of pursuing a medical career until finally in the year 1995 when it became very clear to him that the Lord wanted him to come into the full time ordained ministry with the mandate of staying in the Anglican Church despite being a challenging period for the youths of the Cathedral of Stephen, Oke-Aluko, Ondo.
					</p>
					<p className={styles.MainText}>
						Then, he decided to enroll at Bishop Awosika Theological Seminary of the Diocese of Ondo under the leadership of the Rector the late Ven. Dr. O.O. Oni. After the completion of the mandatory one year training, the initial fifteen candidates for training were reduced to seven. Though, being among the seven, he was the youngest of them all, he was then advised by the Rt. Revd. S.O. Aderin to proceed on further studies as a special candidate to Archbishop Vining College of Theology, Akure in the year 1996. He completed his studies on a brilliant note and was sent to Ondo Diocese. 
					</p>
					<p className={styles.MainText}>
						He was ordered Deacon on July 1999 and priested in the year 2000 by His Lordship the Rt. Revd. Prof. G.L. Lasebikan (now Retired, Bishop of Ondo, Archbishop of the Ecclesiastical Province of Ondo and the Dean Emeritus of the Church of Nigeria) and was sent to St. Andrew’s Church, Idimoge to serve as a Curate under the late Ven. Dr. O.O. Oni and later the Ven. Dr. C.T. Omotunde (now The Most Revd. Dr. C.T. Omotunde – Bishop of Ekiti Diocese & Archbishop of Ondo Ecclesiastical Province) between the year 1999-2004. In the year 2004 he was preferred Statutory Canon and appointed Canon Residentiary of the Cathedral of St. Stephen, Oke-Aluko, Ondo, to serve under the leadership of the Provost, the Very Revd. O. Modupe (Rtd). By God’s providence, he was preferred Archdeacon of the Cathedral of St. Stephen in the year 2009.
					</p>
					<p className={styles.MainText}>
						The Rt. Revd. Dr. Stephen Adeniran Oni served as an officer of the Church of Nigeria Prayer Convocation. Being the Prayer Coordinator of the Diocese of Ondo, he was also the Prayer Coordinator of the Ecclesiastical Province of Ondo working closely with the National Prayer Coordinator, the Rt. Revd. Sosthenes Eze, the Bishop of Enugu North of the Church of Nigeria. he, therefore, served as the Chairman, LOC of the Church of Nigeria Prayer Convocation held in Ondo Diocese in 2008.
					</p>
					<p className={styles.MainText}>
						In the December 2010, he applied and was shortlisted for an interview for the post of an Assistant Chaplain of All Souls’ Chapel, Obafemi Awolowo University, Ile-Ife, where he came first in the interview and was appointed based on merit as the first substantive full time Assistant Chaplain effective January 15, 2011 under the leadership of the Chaplain the Revd. Dr. Z.O. Apata. During this period he labored with the Lord assiduously to see that the kingdom of God was established and that God Himself glorified in the lives of the people, until he was appointed as the 7th Provost of the Cathedral Church of St. Stephen, Oke-Aluko, Ondo in the year 2012. 
					</p>
					<p className={styles.MainText}>
						Also, before his elevation to this enviable position, he was a serving member of the Health and Research Ethics Committee of the Institute of Public Health, Obafemi Awolowo University, Ile-Ife, under the Chairmanship of Prof. O.O. Adeodu. Also, he is a member of Counseling Association of Nigeria and a resource person to Centre for Psychological Studies under the leadership of Prof. Sola Olowu. In addition, by divine providence and unquantifiable favour, he was elected as the 7th Bishop of the Diocese of Ondo on the 6th of February, 2018, was consecrated on the 4th of April, 2018 and enthroned on the 8th of August, 2018.
					</p>
					<h3>
						EDUCATIONAL INSTITUTIONS ATTENDED WITH DATES AND QUALIFICATIONS OBTAINED AND APPOINTMENTS
					</h3>
					<div className={styles.TableContainer}>
						<table className={styles.Table} style={{ minWidth: '700px' }}>
							<tr>
								<td className={styles.RomanNumber}>i.</td> 
								<td className={styles.Acheivement}>Archbishop Vining College of Theology, Akure</td>
								<td className={styles.Date}>1996 - 1999 </td>
								<td>Dip.Th</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>ii.</td> 
								<td className={styles.Acheivement}>Lagos State University, Ojo, Lagos</td>
								<td className={styles.Date}>1999 - 2004 </td>
								<td>BA (Ed)</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>iii.</td> 
								<td className={styles.Acheivement}>University of Ibadan </td>
								<td className={styles.Date}>2015 - 2019 </td>
								<td>M.Ed (Counselling Psychology)</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>iv.</td> 
								<td className={styles.Acheivement}>University of Ibadan </td>
								<td className={styles.Date}>1996 - 1999 </td>
								<td>Ph.D (Counselling Psychology)</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>v.</td> 
								<td className={styles.Acheivement}>Alumnus Haggai International</td>
								<td className={styles.Date}>2012 </td>
								<td>Leadership Training</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>vi.</td> 
								<td className={styles.Acheivement}>Alumnus of Anglican Center in Rome, Italy</td>
								<td className={styles.Date}>2014 </td>
								<td>Apex Leadership Training</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>vii.</td> 
								<td className={styles.Acheivement}>Alumnus Wilberforce Academy United Kingdom	2015</td>
								<td className={styles.Date}>2015 </td>
								<td>Young Professional Leadership Training</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>viii.</td> 
								<td className={styles.Acheivement}>Alumnus Christian Concern, United Kingdom</td>
								<td className={styles.Date}>2015</td>
								<td>Advance Clergy Training</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>ix.</td> 
								<td className={styles.Acheivement}>Chairman Directorate of Prayer and Deliverance Unit</td>
								<td className={styles.Date}>2009 - 2018</td>
								<td>Dip.Th</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>x.</td> 
								<td className={styles.Acheivement}>Chairman of Clergy Forum of Ondo Ecclesiastical Provincial Council </td>
								<td className={styles.Date}>2012 - 2018 </td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xi.</td> 
								<td className={styles.Acheivement}>Appointed member of Ondo State Christian Pilgrims Board</td>
								<td className={styles.Date}>2015</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xii.</td>
								<td className={styles.Acheivement}>Appointed as the National Representative of Christian Concern, United Kingdom </td>
								<td className={styles.Date}>2015</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xiii.</td> 
								<td className={styles.Acheivement}>Chairman Directorate of Evangelism of the Diocese of Ondo</td>
								<td className={styles.Date}>2017</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xiv.</td> 
								<td className={styles.Acheivement}>Chairman Directorate of Training of the Diocese of Ondo</td>
								<td className={styles.Date}>2017</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xv.</td> 
								<td className={styles.Acheivement}>Appointed Vicar General of the Diocese of Ondo</td>
								<td className={styles.Date}>2017</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xvi.</td> 
								<td className={styles.Acheivement}>Appointed as the Coordinating Bishop for Youth Work in the Ecclesiastical Province of Ondo </td>
								<td className={styles.Date}>2018</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xvii.</td> 
								<td className={styles.Acheivement}>Appointed as the Prayer Coordinator of Prayer Convocation of the Ecclesiastical Province of Ondo </td>
								<td className={styles.Date}>2018</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xviii.</td> 
								<td className={styles.Acheivement}>Alumnus of Global Anglican Future Conference (Gafcon), Bishop Training Institutes Kenya </td>
								<td className={styles.Date}>2019</td>
							</tr>
							<tr>
								<td className={styles.RomanNumber}>xix.</td> 
								<td className={styles.Acheivement}>Appointed as the Chairman of translations committee of the Ecclesiastical Province of Ondo </td>
								<td className={styles.Date}>2019</td>
							</tr>
						</table>
					</div>
					<h3>CLERICAL ENTRY/ PREFERMENTS</h3>
					<div className={styles.TableContainer}>
						<table className={styles.Table}>
							<tr>
								<td>Deaconed</td>
								<td>1999 </td>
							</tr>
							<tr>
								<td>Priested</td>
								<td>2000</td>
							</tr>
							<tr>
								<td>Statutory Canon</td>
								<td>2004</td>
							</tr>
							<tr>
								<td>Appointed as Canon Residentiary</td>
								<td>2005</td>
							</tr>
							<tr>
								<td>Archdeacon </td>
								<td>2009</td>
							</tr>
							<tr>
								<td>Elected and Installed as the 7th Provost of the Cathedral Church Of St. Stephen, Oke-Aluko, Ondo </td>
								<td>2012</td>
							</tr>
							<tr>
								<td>Elected, Confirmed, Consecrated and Enthroned as the 7th Bishop of the Diocese of Ondo </td>
								<td>2018</td>
							</tr>
						</table>
					</div>
					<p className={styles.MainText}>
						The Rt. Revd. Dr. Stephen Adeniran Oni, is well travelled preacher of the Word, who is passionate about prayers, Counselling and building leadership Capacity both in the church, national and international levels. He is blessed with a God fearing and amiable consult, Mrs. Oyewola Blessing Oni. A rear gift to the home and ministry of Christ and an Administrator by profession occupying the post of Chief Executive Officer to her credit and the President of the women organisation of the Diocese of Ondo, (Anglican Communion).They are blessed with wonderful heritages of God as children.  May the name of the Lord be praised for ever. Amen.
					</p>
				</div>
			</section>
			<section>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyList}>
					<div className={styles.Clergy}>
						<div className={styles.ClergyImage} >
							<Image layout='fill' objectFit='contain' alt='clergy' src='/images/bishop-oni.png' />
						</div>
						<h4 className={styles.ClergyName}>Rt. Revd. Stephen Adeniran O</h4>
						<div className='faded'>From 1900 - 2021</div>
					</div>
					<div className={styles.Clergy}>
						<div className={styles.ClergyImage} >
							<Image layout='fill' objectFit='contain' alt='clergy' src='/images/bishop-oni.png' />
						</div>
						<h4 className={styles.ClergyName}>Rt. Revd. Stephen Adeniran O</h4>
						<div className='faded'>From 1900 - 2021</div>
					</div>
					<div className={styles.Clergy}>
						<div className={styles.ClergyImage} >
							<Image layout='fill' objectFit='contain' alt='clergy' src='/images/bishop-oni.png' />
						</div>
						<h4 className={styles.ClergyName}>Rt. Revd. Stephen Adeniran O</h4>
						<div className='faded'>From 1900 - 2021</div>
					</div>
					<div className={styles.Clergy}>
						<div className={styles.ClergyImage} >
							<Image layout='fill' objectFit='contain' alt='clergy' src='/images/bishop-oni.png' />
						</div>
						<h4 className={styles.ClergyName}>Rt. Revd. Stephen Adeniran O</h4>
						<div className='faded'>From 1900 - 2021</div>
					</div>
					<div className={styles.Clergy}>
						<div className={styles.ClergyImage} >
							<Image layout='fill' objectFit='contain' alt='clergy' src='/images/bishop-oni.png' />
						</div>
						<h4 className={styles.ClergyName}>Rt. Revd. Stephen Adeniran O</h4>
						<div className='faded'>From 1900 - 2021</div>
					</div>
					<div className={styles.Clergy}>
						<div className={styles.ClergyImage} >
							<Image layout='fill' objectFit='contain' alt='clergy' src='/images/bishop-oni.png' />
						</div>
						<h4 className={styles.ClergyName}>Rt. Revd. Stephen Adeniran O</h4>
						<div className='faded'>From 1900 - 2021</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default MeetBishop
import Image from 'next/image'

const FullNews = ({ id, title, details, image, date, time }) => {
	return (
		<div>
			<h1>{title}</h1>
			<div>
				<span>{time}</span>
				<span>{date}</span>
			</div>
			<Image layout='fill' objectFit='contain' src={'/uploads/' + image} alt={title || 'News title'} />
			<div>{details}</div>
		</div>
	)
}

export default FullNews

export async function getServerSideProps (context) {
	const id = context.params.id

  // get complete news here

  const fullNews = {
  	{
      id: '1',
      title: 'Lorem Ipsum...Lorem Ipsum...',
      details: `Lorem ipsum dolor sit amet, consetetur sadipscing
		elitr, sed diam nonumy eirmod tempor invidunt ut
		labore et dolore magna aliquyam erat, sed diam
		voluptua. At vero eos et accusam et justo duo dolores
		et ea rebum. Stet clita kasd gubergren, no sea`,
      image: '/images/ae.jpg',
      date: '13th December, 2021',
      time: '10:00 pm',
    }
  }

  return {
    props: {
      ...fullNews
    }
  }

}
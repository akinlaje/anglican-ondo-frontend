module.exports = {
  reactStrictMode: true,
  async redirects() {
  	return [
	  	{
	  		source: '/admin',
	  		destination: '/admin/login',
	  		permanent: false	
	  	}
  	]
  }
}

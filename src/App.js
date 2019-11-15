
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard  from './Dashboard';
import Landingpage  from './Landingpage';

export default () => {
    return (
		<Router>
			{/* <Switch> */}
			<div>
				<Route exact path="/" component = {Landingpage} />
				<Route exact path="/dashboard" component={Dashboard} />
				
			</div>
			{/* </Switch> */}
		 </Router>
    );
};

//start at landing page
//search input - make request to get actor id by actor name
// redirect to dashboard page and pass down id

//dashboard page:
// first show loader
// component didmount - get actor movies with the 2 arrays & compare dates
// stop loading and show shuffled movies
// then after it's done - show 2 buttons - 1 for reloading this page and one to redirect back to landing page to search for diff actor.








// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';
// import SortableComponent from './SortableComponent';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';


// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			key: 'f987dff8d32ad9bc3ceca69df3432bfb',
// 			searchValue: '',
// 			actorName:'',
// 			actorId:0,
// 			movies: '',
// 			randomMovieList:'',
// 			randomMovieListDates:'',
// 			sortedMovies: '',
// 			sortedMoviesDates: '',
// 			finalScore: 0,
// 			timer: 25,
// 			submitted: false,
// 			correctAnswers: ''
// 		};
// 	}

// 	startTimer() {
// 		this.clockCall = setInterval(() => {
// 			this.decrementClock();
// 		  }, 1000);

// 	}

// 	decrementClock = () => {  
// 		if(this.state.timer === 0) clearInterval(this.clockCall)
// 		this.setState((prevstate) => ({ timer: prevstate.timer-1 }));
// 	   };
	


	

// 	handleActorChange = (event) => {
// 		const input = event.target.value
		
// 		if (input) {
// 			this.setState({
// 			  searchValue: input,
// 				  movies: '',
// 				randomMovieList:'',
// 				sortedMovies: '',
// 				finalScore: 0,
// 				timer: 15,
// 				submitted: false
// 			}) 
// 		}
// 		this.searchActors()
// 	  }

// 	searchActors(){
// 		if (this.state.searchValue)
// 		axios.get(`https://api.themoviedb.org/3/search/person?api_key=${this.state.key}&language=en-US&query=${this.state.searchValue}&page=1&include_adult=false`)
// 		.then(res => {
// 				console.log(res.data)
// 		})
// 	}



// 	getActorId(){
// 		axios.get(`https://api.themoviedb.org/3/search/person?include_adult=false&page=1&query=${this.state.actorName}&language=en-US&api_key=${this.state.key}`)
// 			.then(res => {
// 				const actorId = res.data.results[0].id;
// 				this.setState({ actorId , movies: [] });
// 		})
// 	  }

// 	  shuffleMovies(array){
// 		const shuffledMovies = array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
// 		const fiveRandomMovies = shuffledMovies.splice(0, 5);
// 		// console.log(fiveRandomMovies);
// 		this.setState({ randomMovieList : fiveRandomMovies});
// 	  }

// 	  sortMovies(movies){

// 		const sortedMovies = movies.slice().sort((a, b) => new Date(a.release_date) - new Date(b.release_date))

// 		this.setState({ sortedMovies });
// 	  }

// 	  compareDates(){
// 		const sortedList = this.state.sortedMovies;
// 		const randomList = this.state.randomMovieList;
	
// 		let score = 0;
// 		for (let i = 0; i < randomList.length; i++) {
// 		  if (randomList[i] === sortedList[i]) 
// 			score++
// 		}
// 		this.updateScore(score);
// 	  }


// 	  getActorMovies(){
// 		axios.get(`https://api.themoviedb.org/3/person/${this.state.actorId}/movie_credits?language=en-US&api_key=${this.state.key}`)
// 		.then(res => {

// 			const allMovies = res.data.cast;

// 			const filteredMovies = allMovies.filter((movie)=> {
// 				return (movie.poster_path && movie.release_date && !movie.release_date.includes('2020'))
// 			})

// 			this.setState({ movies : filteredMovies });
// 		})

// 		setTimeout( () =>
// 			{this.shuffleMovies(this.state.movies)}, 800
// 		)

// 		setTimeout( () =>
// 			{this.sortMovies(this.state.randomMovieList);}, 900
// 		)

// 		setTimeout( () =>
// 			{this.compareDates()}, 1000
// 		)

// 	  }

	  
	
// 	  handleButtonSubmit = (event) => {
// 		event.preventDefault();

// 		this.getActorId()

// 		setTimeout( () =>
// 			{this.getActorMovies()}, 1700
// 		)

// 		this.setState({
// 		  searchValue: ''
// 		})

// 		setTimeout( () =>
// 			{this.startTimer()}, 1900
// 		)

// 	  }

// 	updateScore = (score) => {
// 		  this.setState({
// 			  finalScore: score
// 		  })
// 	  }

// 	  handleSubmitAnswer = (e) =>{
// 		  e.preventDefault();

// 		  this.setState({
// 			submitted: true
// 		  })
// 	  }


// 	render() {
// 		return(
// 			<div className='container'>
				
// 				<form onSubmit={this.handleButtonSubmit}>
// 				<Autocomplete
// 					id="combo-box-demo"
// 					options={top100Films}
// 					getOptionLabel={option => option.title}
// 					style={{ width: 300 }}
// 					renderInput={params => (
// 						<TextField {...params} label="Combo box" variant="outlined" fullWidth />
// 					)}
// 					/>
// 					{/* <input onChange={this.handleActorChange} type='text' placeholder="Search Actor" value={this.state.searchValue}/> */}
// 					<button>Enter</button>
// 				</form>
// 				{
// 					this.state.timer <= 0  || this.state.submitted ? 
// 						<div>
// 							<h2>{ this.state.timer <= 0 && this.state.finalScore ? <span>Time's up!</span> : this.state.submitted && this.state.finalScore ? <span>Thanks for playing!</span>: null} Your score is {this.state.finalScore}/5</h2> 
// 							<h3>The correct answer is:</h3>
// 							<ul>
// 								{
// 									this.state.sortedMovies.map((movie) => {
// 										return (
// 										  <div>
// 											<li>{movie.title}</li>
// 											<img alt={movie.title} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
// 											<p>Released on: {movie.release_date}</p>
// 										  </div>
// 										)
// 									  })
// 								}
// 							</ul>
// 						</div>
// 							:
// 							<div>{
// 								this.state.randomMovieList  ? 
// 								[<p>{this.state.timer}</p>,
// 								<SortableComponent movies={this.state.randomMovieList} sortedMovies={this.state.sortedMovies} updateScore={this.updateScore}/>
// 								, <button onClick={this.handleSubmitAnswer}>Submit Answer</button>]
// 								: null
// 							}</div>
// 						}
				
// 			</div>
// 		);
// 	}
// }

// export default App;
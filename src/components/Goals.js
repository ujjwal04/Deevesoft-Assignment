import React,{Component} from "react";
import fire from "./../utils/Firebase";
import styles from "./Goals.module.css";

class Goals extends Component {
    constructor() {
        super();
        this.tasks = [
            {
                name: "Get Leaner",
                value: "getLeaner",
            },
            {
                name:"Get active again",
                value: "getActiveAgain"
            },
            {
                name: "Reduce Pain or Injury",
                value: "getActiveAgain",
            },
            {
                name:"Reduce Pain or Injury",
                value: "reducePainOrInjury"
            },
            {
                name: "Improve cardio or speed",
                value:"improveCardioOrSpeed"
            },
            {
                name:"Improve sports performance",
                value:"improveSportsPerformance"
            }
        ];

        this.state = {
            getLeaner: false,
            getActiveAgain: false,
            reducePainOrInjury: false,
            improveCardioOrSpeed: false,
            improveSportsPerformance: false,
            isLoading:false
        }
    }

    handleInput = (input) => {
        this.setState({ [input.target.name]: true },() => console.table(this.state));
    };

    formHandle(event) {
        event.preventDefault();
        this.setState({isLoading:true})
        fire.firestore().collection("goals").add({
            getLeaner: this.state.getLeaner,
            getActiveAgain: this.state.getActiveAgain,
            reducePainOrInjury: this.state.reducePainOrInjury,
            improveCardioOrSpeed: this.state.improveCardioOrSpeed,
            improveSportsPerformance: this.state.improveSportsPerformance,
            date:new Date().toString()
        })
        .then(() => {
            this.setState({isLoading:false},() => alert("Goals are set!!"))
        })
        .catch(err => console.log("Some error occured"));
    }

    render() {
        return (
            <div className="container">
                <header className="mb-5 row justify-content-center">
                    <h1 className={["text-center mt-3 w-25",styles.green].join(" ")}>Goal</h1>
                </header>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 col-sm-12">
                        <div className="left-section">
                            <h1>Goals</h1>
                            <p className="text-justify text-muted">Select your primary goal. What do you want to acheive in the next coming months?</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 bg-light pb-4">
                        <div className="right-section mt-5 row justify-content-center">
                            <form onSubmit={(event) => this.formHandle(event)}>
                            <div className="form-check p-3" onChange={(event) => this.handleInput(event)}>
                                <input className={["form-check-input",styles.radio].join(" ")} type="radio" name="getLeaner" id="getLeaner" value="getLeaner"/>
                                <label className="form-check-label" for="getLeaner">
                                    <h4 className="font-weight-normal">Get Leaner</h4>
                                </label>
                            </div>
                            <div className="form-check p-3" onChange={(event) => this.handleInput(event)}>
                                <input className={["form-check-input",styles.radio].join(" ")} type="radio" name="getActiveAgain" id="getActiveAgain" value="getActiveAgain"/>
                                <label className="form-check-label" for="getActiveAgain">
                                    <h4 className="font-weight-normal">Get active again</h4>
                                </label>
                            </div>
                            <div className="form-check p-3" onChange={(event) => this.handleInput(event)}>
                                <input className={["form-check-input",styles.radio].join(" ")} type="radio" name="reducePainOrInjury" id="reducePainOrInjury" value="reducePainOrInjury"/>
                                <label className="form-check-label" for="reducePainOrInjury">
                                    <h4 className="font-weight-normal">Reduce Pain or Injury</h4>
                                </label>
                            </div>
                            <div className="form-check p-3" onChange={(event) => this.handleInput(event)}>
                                <input className={["form-check-input",styles.radio].join(" ")} type="radio" name="improveCardioOrSpeed" id="improveCardioOrSpeed" value="improveCardioOrSpeed"/>
                                <label className="form-check-label" for="improveCardioOrSpeed">
                                    <h4 className="font-weight-normal">Improve cardio or speed</h4>
                                </label>
                            </div>
                            <div className="form-check p-3" onChange={(event) => this.handleInput(event)}>
                                <input className={["form-check-input",styles.radio].join(" ")} type="radio" name="improveSportsPerformance" id="improveSportsPerformance" value="improveSportsPerformance"/>
                                <label className="form-check-label" for="improveSportsPerformance">
                                    <h4 className="font-weight-normal">Improve sports performance</h4>
                                </label>
                            </div>
        <button type="submit" className="btn btn-primary mt-4">{!this.state.isLoading?<h4>Submit</h4>:<div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Goals;
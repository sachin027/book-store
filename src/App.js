import './App.css'
import React, { PureComponent } from 'react'

// import Greet from './component/Title'
// import Welcome from './pages/Home'
// import Message from './pages/Home'
// import Counter from './pages/Counter'
// import FunctionClick from './component/FunctionClick'
// import ClassClick from './pages/ClassClick'
// import EventBind from './pages/EventBind'
// import ParentComponent from './pages/ParentComponent'
// import UserGreeting from './pages/UserGreeting'
// import NameList from './component/NameList'
// import About from './pages/About'
// import Title from './component/Title'
// import List from './component/List'
// import Stylesheet from './component/Stylesheet'
// import Inline from './component/Inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './pages/Form';
// import LoginForm from './pages/LoginForm'
// import LifeCycleA from './pages/LifeCycleA'
// import FragmentDemo from './component/FragmentDemo'
// import Table from './component/Table'
// import PureComp from './pages/PureComp'
// import RegComp from './pages/RegComp'
// import ParentComp from './pages/ParentComp'
// import RefsDemo from './pages/RefsDemo'
// import FocusInput from './pages/FocusInput'
// import FRParentInput from './pages/FRParentInput'
// import PortalDemo from './component/PortalDemo'
// import Hero from './component/Hero'
// import ErrorBoundary from './ErrorBoundary'
// import ClickCounter from './pages/ClickCounter'
// import HoverCounter from './pages/HoverCounter'
// import Home from './pages/Home'
// import ClickCounterTwo from './pages/ClickCounterTwo'
// import HoverCounterTwo from './pages/HoverCounterTwo'
// import User from './pages/User'
// import Counter from './pages/Counter'
// import RenderPropsComponent from './RenderPropsComponent'
import ComponentC from './pages/ComponentC'
import { UserProvider } from './pages/userContext'
import PostList from './pages/PostList'
import PostForm from './pages/PostForm'
import Users from './pages/Users'
class App extends React.Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      isAbout : false,
  //      isTitle : false
  //   }
  // }

  // clickAbout(){
  //     this.setState({
  //       isAbout : true,
  //       isTitle : false
  //     })
  // }

  // clickTitle(){
  //   this.setState({
  //     isTitle : true,
  //     isAbout : false
  //   })
  // }
  
  render(){
    // let page
    // if (this.state.isAbout){
    //   page = <About/>
    // } else {
    //   page = <Title/>
    // }
  return (
    <div className="App">
      {/* <Greet name='Umang'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Dhruv'>
        <button>Action</button>
      </Greet>
      <Greet name='Sajan'/> */}

      {/* <Welcome name='Tirth'/>
      <Welcome name='Dhaval'/>
      <Welcome name='Niraj'/>  */}

      {/* <Message/> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind/> */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <button onClick={() => this.clickAbout()}>About</button>
      <button onClick={() => this.clickTitle()}>Title</button>
      {page} */}

      {/* <List/> */}

      {/* <Stylesheet/> */}

      {/* <Stylesheet primary={true}/> */}

      {/* <Inline/> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Form/> */}

      {/* <List/> */}

      {/* <LoginForm/> */}

      {/* <LifeCycleA/> */}

      {/* <FragmentDemo/> */}

      {/* <Table/> */}

      {/* <PureComp/>
      <RegComp/> */}

      {/* <ParentComp/> */}

      {/* <List/> */}

      {/* <RefsDemo/> */}
      
      {/* <FocusInput/> */}

      {/* <FRParentInput/> */}

      {/* <FocusInput/> */}

      {/* <PortalDemo/> */}

      {/* <ErrorBoundary>
        <Hero heroname="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Joker"/>
      </ErrorBoundary> */}

      {/* <ClickCounter name="Umang"/>
      <HoverCounter/> */}

      {/* <Home/> */}

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIN) => isLoggedIN ? 'Umang' : 'Guest'}/> */}

      {/* <Counter render={(count,incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}/>
      <Counter render={(count,incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}/> */}

      {/* <RenderPropsComponent render= {()=>{
        return (
          <h3>I am coming from render props</h3>
        )
      }}/> */}

      {/* <UserProvider value="Umang">
        <ComponentC/>
      </UserProvider> */}

      {/* <PostList/> */}

      {/* <PostForm/> */}

      <Users/>
    </div>)
  }
}

export default App

import Head from 'next/head';
import 'bulma/css/bulma.css';
import styles from '../styles/SRPS.module.css';
import Web3 from 'web3'

export default function safeRemotePurchase() {
    
    // let web3 

    const connectWalletHandler = async () => {
        /* check if MetaMask is installed */
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try {
              /* request wallet connect */
              await window.ethereum.request({ method: "eth_requestAccounts" })
              /* create web3 instance and set to state var */
              const web3 = new Web3(window.ethereum)
              /* set web3 instance */
            //   setWeb3(web3)
              /* get list of accounts */
            //   const accounts = await web3.eth.getAccounts()
              /* set Account 1 to React state var */
            //   setAddress(accounts[0])
              
  
              /* create local contract copy */
            //   const vm = vendingMachineContract(web3)
            //   setVmContract(vm)  
            } catch(err) {
              setError(err.message)
            }
        } else {
            // meta mask is not installed
            console.log("Please install MetaMask")
        }
      }

    return(
        <div className={styles.main}>
            <Head>
                <title>Safe Remote Purchase</title>
                <meta name="description" content="Safe Remote Purchase system" />
            </Head> 
            <nav className="navbar mt-4 mb-4">
            <div className="container">
                <div className="navbar-brand">
                  <h1>Safe Remote Purchase System</h1>
                </div>
                <div className="navbar-end">
                    <button onClick={connectWalletHandler} className="button is-primary">Connect Wallet</button>
                </div>
            </div>
          </nav>
      </div>
    )
}
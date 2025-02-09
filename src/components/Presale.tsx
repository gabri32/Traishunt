import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { checkBalance, checkAvaliable, registerWallet, buyTokens, confirmarCompra } from "../services/api";

//import { stringify } from "querystring";


interface Props {
  expired: Date;
}
let VITE_ABI_USDT = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "address payable", "name": "relayerAddress", "type": "address" }, { "indexed": false, "internalType": "bytes", "name": "functionSignature", "type": "bytes" }], "name": "MetaTransactionExecuted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "CHILD_CHAIN_ID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CHILD_CHAIN_ID_BYTES", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DEPOSITOR_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ERC712_VERSION", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ROOT_CHAIN_ID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ROOT_CHAIN_ID_BYTES", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }], "name": "changeName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bytes", "name": "depositData", "type": "bytes" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "bytes", "name": "functionSignature", "type": "bytes" }, { "internalType": "bytes32", "name": "sigR", "type": "bytes32" }, { "internalType": "bytes32", "name": "sigS", "type": "bytes32" }, { "internalType": "uint8", "name": "sigV", "type": "uint8" }], "name": "executeMetaTransaction", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getChainId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "getDomainSeperator", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getNonce", "outputs": [{ "internalType": "uint256", "name": "nonce", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint8", "name": "decimals_", "type": "uint8" }, { "internalType": "address", "name": "childChainManager", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let VITE_CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_usdtToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct USDTManager.Payment[]","name":"payments","type":"tuple[]"}],"name":"distributeUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const CONTRACTADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS
const Component: React.FC<Props> = ({ }: Props) => {

  const [tshusdt, setTshUsdt] = useState(0);
  const [collected, setCollected] = useState<number>(0);
  const total = 150000;
  let percentage = (collected / total) * 100;
  const [pernow, setPernow] = useState<number>(Number); // Almacenar porcentaje
  const [boughtTsh, buyer] = useState<number>(Number);
  const [amountPos, SetAmountPos] = useState<number>(); // Almacenar el total de tokens por fase
  const [usdtBalance, setUsdtBalance] = useState<number | 0>(0); // Almacenar el saldo de USDT
  const [maticBalance, setMaticBalance] = useState<number | 0>(0); // Almacenar el saldo de MATIC
  const [allowance, setAllowance] = useState<number | 0>(0)
  const [walletAddress, setWalletAddress] = useState<string>();
  const [balanceInfo, setBalanceInfo] = useState(null); // Estado para almacenar el resultado de la API
  const [loading, setLoading] = useState(false); // Estado para mostrar un indicador de carga
  const [error, setError] = useState(false); // Estado para manejar errores
  const [tsh, totaltsh] = useState<number>(0)
  //let accounts: string;
  const [mensaje, setMensaje] = useState('copiar'); // Variable de estado
  const [tieneref, setTieneref] = useState(false);
  const [referido, setReferido] = useState(''); // Variable de estado
  let active = false
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoReferido = e.target.value;
    setReferido(nuevoReferido);
    setError(false); // Reiniciar el error al cambiar el input

    try {
      console.log(":");
      console.log(balanceInfo, loading);
    } catch (error) {
      console.error("Error al verificar el referido:", error);
      setError(true);
    }
  };

  // Función para copiar el contenido al portapapeles
  const handleCopy = async (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(referido);
    setMensaje('Copiado');
  };
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);
    totaltsh(inputValue)
    try {
      setLoading(true);
      //   setError(null);
      const result = await checkBalance(inputValue);
      const calculatedTsh = Number(result.valores.precioTotal.toFixed(4));
      setTshUsdt(calculatedTsh);
      console.log(tieneref)
      setBalanceInfo(result);
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!window.ethereum) {
      alert("Por favor instala Metamask para usar esta dApp");
    } else {
      checkAvaliable().then((res) => {
        const collected = res.cantidadDisponible.tokensDisponibles;
        percentage = ((collected / total) * 100);
        setCollected(collected);
        const calculatedPernow = parseFloat((100 - percentage).toFixed(2));
        setPernow(calculatedPernow);
        const params = new URLSearchParams(window.location.search);
        const referidoUrl = params.get('referido');
        if (referidoUrl) {
          setReferido(referidoUrl);
        }
        SetAmountPos(parseFloat(Number(res.cantidadDisponible.precioactual).toFixed(2)));
      });
    }

  }, []);

  useEffect(() => {
    if (walletAddress) {
      getUsdtBalance();
      getMaticBalance();
      getAllowance();
    } else (
      console.error("wallet address undefined")
    )


  },
    [walletAddress]);

    const connectWallet = async () => {
      try {
        if (typeof window.ethereum === "undefined") {
          alert("MetaMask no está instalado. Por favor, instálalo para continuar.");
          return;
        }
    
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
    
        // ID de la red de Polygon Mainnet es 137
        if (chainId !== "0x89") {
          alert("Por favor, cambia a la red de Polygon Mainnet en MetaMask.");
          return;
        }
    
        let nuevoReferido = referido;
        if (referido === "") {
          nuevoReferido = "67a7d814bfa086036586d6e2";
        }
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    
        if (accounts.length === 0) {
          throw new Error("No se detectó ninguna cuenta.");
        }
    
        setWalletAddress(accounts[0]);
        console.log("Wallet conectada en la red de Polygon Mainnet");
    
        // Llamada al backend para registrar la wallet
        let register = await registerWallet(accounts[0], nuevoReferido);
    
        buyer(register.tokensComprados);
    
        if (register.referido !== "") {
          setTieneref(true);
        }
    
        const referidoLink = `https://traishunt.com?referido=${register._id}`;
        setReferido(referidoLink);
    
      } catch (error) {
        console.error("Error conectando la wallet:", error);
      }
    };
    

  const getcontractUsdt = async () => {
    const usdtAddress: string = import.meta.env.VITE_USDT_ADDRESS;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const abiUsdt = VITE_ABI_USDT;
    const signer = await provider.getSigner();
    const getcontractUsdt = new ethers.Contract(usdtAddress, abiUsdt, signer)
    return getcontractUsdt;
  };

  const getcontract = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACTADDRESS, VITE_CONTRACT_ABI, signer)
    return contract;
  };
  const getUsdtBalance = async () => {

    try {
      const contract = await getcontractUsdt();
      const balance = await contract.balanceOf(walletAddress);
      setUsdtBalance(balance);
      console.log({ balance })
    } catch (err) {
      console.error("Error obteniendo balance:", err);
    }
  };

  const getAllowance = async () => {
    try {
      const contract = await getcontractUsdt();
      const allowance = await contract.allowance(walletAddress, import.meta.env.VITE_CONTRACT_ADDRESS);
      setAllowance(allowance)
    } catch (err) {
      console.error("Error obteniendo balance:", err);
    }
  };

  const getMaticBalance = async () => {
    try {
      console.log("Iniciando getMaticBalance...");
      const apiKey = import.meta.env.VITE_POLYGONSCAN_API_KEY;
      const url = `https://api.polygonscan.com/api?module=account&action=balance&address=${walletAddress}&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1") {
        const balanceWei = data.result;
        const balanceMatic = balanceWei / 1e18;
        console.log({ balanceMatic })
        setMaticBalance(balanceMatic);
      } else {
        console.error("Error en la respuesta de Polygonscan:", data.message);
      }


    } catch (error) {
      console.error("Error al consultar balance en Polygonscan:", error);
    }
  };


  const approveTokenFrontend = async () => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    
    // ID de la red de Polygon Mainnet es 137
    if (chainId !== "0x89") {
      alert("Por favor, cambia a la red de Polygon Mainnet en MetaMask.");
      return;
    }
    if (usdtBalance <= tshusdt * 1e6) {
      alert("No tienes suficiente USDT para realizar la transacción");

    } else {
      if (maticBalance <= 1) {
        alert("Fee insuficiente");

      } else {
        try {
          active != active
          const aprove =(tshusdt * 1e6)
          console.log({aprove})
          const contract = await getcontractUsdt();
          const tx = await contract.approve(CONTRACTADDRESS,aprove);
          await tx.wait(); // Esperar a que la transacción se confirme en la blockchain
              try {
                  const contract = await getcontract();
                  const params = {
                    cantidadTokens: tsh,
                    wallet: walletAddress,
                  };


                  const compra = await buyTokens(params);
                  const payments = compra.costo.wallettocontrato;
                  console.log("pagos", payments)
                 const aprobado = await getAllowance()
                 console.log("aprbado",aprobado)
                  console.log("datos a aprobacion",{allowance})
                  console.log(payments[0].amount)
                  if(allowance>=payments[0].amount){
                    const txDistribute = await contract.distributeUSDT(payments);
                  console.log("distribucion",txDistribute)
                  await txDistribute.wait();
                  let params1 = {
                    wallet: walletAddress,
                    cantidadTokens: params.cantidadTokens,
                    precioTotal: tshusdt,
                  };
                  await confirmarCompra(params1);

                  alert("Transacción completada con éxito");
                  active != active
                  }
              } catch (error) {
                active != active
                console.error("Error en la compra de tokens:", error);
              }
            } catch (err) {
          console.error("Error obteniendo balance:", err);
        }
      }
    }








  };





  return (
    <>
      <section id="presale" className="container mx-auto sm:z-10 block py-7  lg:p-16 relative">
        <div className="grid gap-9">

          <div className="grid text-center">
            <h2 className="text-center color-main font-protest text-4xl lg:text-7xl">TRAISHUNT</h2>
            <span className="font-light  text-xl lg:text-3xl text-white">Preventa</span>
          </div>
          <div className="flex w-full justify-center">
            <div className="grid bg-card-c rounded-2xl w-fit p-7 gap-4">
              <div className="grid">
                <span className="text-2xl lg:text-3xl color-main w-fit rounded-xl font-protest">FASE 1</span>
                <span className="text-base lg:text-lg text-white font-light">Primera fase de compra</span>
              </div>
              <div>
                <span className="text-xs lg:text-base">Referido:</span>
                <br />
                <input
                  type="text"
                  disabled={true}
                  name="referido"
                  className="bg-main rounded-lg p-1 px-3 text-black text-base lg:text-xl font-bold w-32 lg:w-80"
                  value={referido}
                  onChange={handleChange}
                />
                <button
                  className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={(e) => handleCopy(e)}
                >
                  {mensaje}
                </button>
              </div>
              <div className="flex justify-center w-full text-white gap-2 text-xl"><span>{collected} <small>TSH</small></span> / <span> {total} <small>TSH</small></span></div>
              <div className="">
                <span id="ProgressLabel" className="sr-only">Loading</span>
                <span
                  role="progressbar"
                  aria-labelledby="ProgressLabel"
                  aria-valuenow={percentage}
                  className="relative block rounded-full bg-[#060C18]"
                >
                  <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                    <span className="text-white">Fase 1 <span className="text-sm ms-1">{Math.round(pernow)}%</span></span>
                  </span>
                  <span className="block h-5 rounded-full bg-gradient-to-r from-teal-800 to-teal-400 text-center" style={{ width: `${percentage}%` }}> </span>
                </span>
              </div>
              <div className="flex justify-center w-full text-white gap-2 text-xl"><span>1 TSH</span> = <span>{amountPos}USD</span></div>
              <div className="flex justify-center w-full">
                <form className="grid grid-cols-2 w-fit gap-4 lg:gap-7 group relative overflow-hidden rounded-2xl p-3 sm:p-4 sm:px-11 text-white bg-[#060C18] transition-all">
                  <div className="color-main">MIS FONDOS</div>
                  <div className="font-semibold text-3xl lg:text-5xl">{boughtTsh} <small>TSH</small></div>
                  <div className="grid">
                    <span className="text-xs lg:text-base">Comprar TSH</span>
                    <input
                      type="number"
                      name="usd"
                      min={0}
                      defaultValue={80}
                      className="bg-main rounded-lg p-1 px-3 text-black text-base lg:text-xl font-bold w-32 lg:w-44"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid">
                    <span className="text-xs lg:text-base">Precio en USDT</span>
                    <span className="bg-main rounded-lg p-1 px-3 text-black text-base lg:text-xl font-bold w-32 lg:w-44">{tshusdt}</span>
                  </div>


                  <div className="col-span-2 flex justify-center w-full">
                    {!walletAddress ? (

                      <a

                        className="text-black bg-main rounded-full w-fit px-7 lg:px-14 py-2 text-base lg:text-2xl lg:font-semibold hover:bg-black hover:text-teal-400 transition-all cursor-pointer"
                        onClick={connectWallet}
                      >
                        CONECTAR WALLET
                      </a>
                    ) : (
                      <p className="text-lg text-center">
                        Wallet conectada
                        <br />
                        <br />
                        {!active && (
                          <a
                            className={`text-black bg-main rounded-full w-fit px-7 lg:px-14 py-2 text-base lg:text-2xl lg:font-semibold transition-all cursor-pointer 
                            ${tshusdt > 0 ? 'hover:bg-black hover:text-teal-400' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
                            onClick={tshusdt > 0 ? approveTokenFrontend : undefined}
                          >
                            Comprar tsh
                          </a>
                        )}

                      </p>

                    )}
                  </div>
                  <div className="col-span-2 flex justify-center w-full">
                    <span className="font-light color-main text-xs">Comisión de sistema 10%</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="grid lg:grid-cols-2 gap-9">
              <div className="flex w-full justify-center opacity-60 hover:opacity-100 transition-all">
                <div className="grid bg-card-c rounded-2xl w-fit p-7 gap-4">
                  <div className="grid">
                    <span className="text-2xl lg:text-3xl color-main w-fit rounded-xl font-protest">FASE 2</span>
                    <span className="text-base lg:text-lg text-white font-light">Segunda fase de compra</span>
                  </div>
                  <div className="flex justify-center w-full text-white gap-2 text-xl"><span>{0} <small>TSH</small></span> / <span> 350000 <small>TSH</small></span></div>
                  <div className="">
                    <span id="ProgressLabel" className="sr-only">Loading</span>
                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow={0}
                      className="relative block rounded-full bg-[#060C18]"
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                        <span className="text-white">Fase 2 <span className="text-sm ms-1">{Math.round(0)}%</span></span>
                      </span>
                      <span className="block h-5 rounded-full bg-gradient-to-r from-teal-800 to-teal-400 text-center" style={{ width: `${0}%` }}> </span>
                    </span>
                  </div>
                  <div className="flex justify-center w-full text-white gap-2 text-xl"><span>1 TSH</span> = <span>0.2 USD</span></div>
                </div>
              </div>
              <div className="flex w-full justify-center opacity-60 hover:opacity-100 transition-all">
                <div className="grid bg-card-c rounded-2xl w-fit p-7 gap-4">
                  <div className="grid">
                    <span className="text-2xl lg:text-3xl color-main w-fit rounded-xl font-protest">FASE 3</span>
                    <span className="text-base lg:text-lg text-white font-light">Tercera fase de compra</span>
                  </div>
                  <div className="flex justify-center w-full text-white gap-2 text-xl"><span>{0} <small>TSH</small></span> / <span> 550000 <small>TSH</small></span></div>
                  <div className="">
                    <span id="ProgressLabel" className="sr-only">Loading</span>
                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow={0}
                      className="relative block rounded-full bg-[#060C18]"
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                        <span className="text-white">Fase 3 <span className="text-sm ms-1">{Math.round(0)}%</span></span>
                      </span>
                      <span className="block h-5 rounded-full bg-gradient-to-r from-teal-800 to-teal-400 text-center" style={{ width: `${0}%` }}> </span>
                    </span>
                  </div>
                  <div className="flex justify-center w-full text-white gap-2 text-xl"><span>1 TSH</span> = <span>0.3 USD</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Component

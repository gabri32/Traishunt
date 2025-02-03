// src/services/api.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API;


export const checkBalance = async (amount:number) => {
  try {
    const response = await axios.get(`${API_URL}/api/preventa/costotoken?cantidadTokens=`+amount);
  
    return response.data;
  } catch (error) {
    console.error("Error al verificar el saldo:", error);
    throw error;
  }
};
export const confirmarCompra = async (params:object) => {
  try {
    const response = await axios.get(`${API_URL}/api/preventa/confirmarcompra`,{ params });
  
    return response.data;
  } catch (error) {
    console.error("Error al verificar el saldo:", error);
    throw error;
  }
};
export const verifyref = async (ref:string) => {
  try {
    const response = await axios.get(`${API_URL}/api/preventa/verifyref?ref=`+ref);
  
    return response.data;
  } catch (error) {
    console.error("Error al verificar el saldo:", error);
    throw error;
  }
};



export const checkAvaliable = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/preventa/disponiblesPorFase`);
    console.log("datos de respuesta fase",response.data);  
    return response.data;
  } catch (error) {
    console.error("Error al verificar el saldo:", error);
    throw error;
  }
};

export const buyTokens = async (params:object) => {
try {
  const response = await axios.post(`${API_URL}/api/preventa/comprarTokens`, { params });
  return response.data;
} catch (error) {
  console.error("Error al realizar la compra:", error);
  throw error;
}
};

export const registerWallet= async (wallet:string,referido:string) => {
  try {
    const response = await axios.post(`${API_URL}/api/preventa/registro`, { wallet,referido });
 
    return response.data.mensaje;
   
  } catch (error) {
    console.error("Error al registrar la wallet:", error);
    throw error;
  }
  };

// Función para enviar una transacción
export const sendTransaction = async (address:string, amount:number) => {
  try {
    const response = await axios.post(`${API_URL}/send-transaction`, { address, amount });
    return response.data;
  } catch (error) {
    console.error("Error al realizar la transacción:", error);
    throw error;
  }
};

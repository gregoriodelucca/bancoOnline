import React, { useState } from 'react';
import './App.css';

// Definição de tipo para Transação
interface Transaction {
  id: number;
  description: string;
  amount: number;
}

// Componente principal
const App: React.FC = () => {
  const [balance, setBalance] = useState(0); // Estado para saldo
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Estado para transações

  // Função para adicionar transação
  const addTransaction = (description: string, amount: number) => {
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      description,
      amount,
    };
    setTransactions([...transactions, newTransaction]);
    setBalance(balance + amount); // Atualiza o saldo
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Banco Online</h1>
        <h2>Saldo Atual: R$ {balance.toFixed(2)}</h2>

        <h3>Transações</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description}: R$ {transaction.amount.toFixed(2)}
            </li>
          ))}
        </ul>

        {/* Formulário para adicionar uma transação */}
        <div className="transaction-form">
          <input
            type="text"
            id="description"
            placeholder="Descrição da transação"
            className="input-field"
          />
          <input
            type="number"
            id="amount"
            placeholder="Valor"
            className="input-field"
          />
          <button
            onClick={() => {
              const description = (
                document.getElementById('description') as HTMLInputElement
              ).value;
              const amount = parseFloat(
                (document.getElementById('amount') as HTMLInputElement).value
              );
              addTransaction(description, amount);
            }}
          >
            Adicionar Transação
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

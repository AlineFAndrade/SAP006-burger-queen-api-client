import { upDateOrderStatus } from "../services/dataService";
import { Button } from "./Button";
import { useState } from "react";
import { Modal } from "./Modal";
import "../styles/cardOrder.scss";

export function CardOrder({ order, setAllOrders, allOrders }) {
  const [modal, setModal] = useState({ text: "", show: false });

  const changeStatusToDone = () => {
    upDateOrderStatus(order.id, "preparing").then((result) => {
      if (result.ok) {
        setModal({ text: "Pedido iniciado.", show: true });
        order.status = "done";
        setAllOrders([...allOrders]);
      } else {
        setModal({ text: "Pedido não iniciado.", show: true });
      }
    });
  };

  const changeStatusToDelivered = () => {
    upDateOrderStatus(order.id, "finished").then((result) => {
      if (result.ok) {
        setModal({ text: "Pedido finalizado.", show: true });
        order.status = "finished";
        setAllOrders([...allOrders]);
      } else {
        setModal({ text: "Pedido não pronto.", show: true });
      }
    });
  };

  let translatedStatus = "";
  switch (order.status) {
    case "pending":
      translatedStatus = "Em preparo";
      break;
    case "preparing":
      translatedStatus = "Pedido pronto";
      break;
    default:
      translatedStatus = "Pedido finalizado";
  }
  const changeTimeDefault = new Date(order.createdAt);

  const lastUpDate = new Date(order.updatedAt);
  let preparingTime = 0;
  if (order.processedAt !== null) {
    const processedDate = new Date(order.processedAt);
    preparingTime =
      (lastUpDate.getTime() - processedDate.getTime()) / 1000 / 60;
    preparingTime = Math.round(preparingTime);
  }

  let xuxu = {}
  if (order.status === "pending"){ (
    xuxu = <Button
      className="status-btn pending"
      buttonText="Pedido Pronto"
      onClick={changeStatusToDone}
    />
  )}else if(order.status === "preparing"){(
    xuxu = <Button
      className="status-btn finished"
      buttonText="Finalizado"
      onClick={changeStatusToDelivered}
    />
  )}else{
    xuxu = <h3>Finalizado</h3>
  }

  return (
    <main className="card-order-main">
      <div classname="status">
        <h3>{translatedStatus}</h3>
      </div>
      <div className="order-info">
        <p>Cliente: {order.client_name}</p>
        <p>Mesa: {order.table}</p>
        <p>Atendente: {order.user_id}</p>
        <p>
          Entrada:{" "}
          {`${changeTimeDefault.toLocaleDateString()} - ${changeTimeDefault.toLocaleTimeString()}`}
        </p>
        <p>Tempo de Preparo: {preparingTime} minutos</p>
      </div>
      <div className="separator"></div>

      {order.Products.map((element) => {
        return (
          <div className="order-products">
            <p>
              {element.qtd} {element.name} {element.flavor} {element.complement}
            </p>
          </div>
        );
      })}
      {xuxu}

      <Modal
        children={modal.text}
        hide={modal.show}
        setHide={setModal}
        callback={() => {}}
      ></Modal>
    </main>
  );
}

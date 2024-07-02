"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const OrderDetails = (params: any) => {


  const [order, setOrders] = useState<IOrder>();
  

  console.log("params", params.params.id)

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await fetch(
          `/api/order/orderId?query=${params.params.id}`
        );
        const resp = await response.json();
        
        setOrders(resp[0]);
        console.log("UI........",order);
      } catch {
        console.log("err");
      }
    };

    

    getOrder();
    
  }, [params]);

  return (
    <div className="container mx-auto mt-10">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
                <h1 className="text-xl font-semibold">Order #{order?.orderId} Details</h1>
            </div>
            <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                    <h2 className="text-lg font-semibold">Shipping Information</h2>
                    <p>{order?.name}</p>
                    <p>{order?.address}</p>
                    <p>{order?.email}</p>
                </div>
                <div className="w-1/2 ml-2">
                    <h2 className="text-lg font-semibold">Billing Information</h2>
                    <p>{order?.name}</p>
                    <p>{order?.address}</p>
                    <p>{order?.email}</p>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Order Items</h2>
                <table className="min-w-full leading-normal mt-2">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Item
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Quantity
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Price
                            </th>
                        </tr>
                    </thead>
                    {order?.products.map((product)=>{
                        return (<><tbody>
                            <tr>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {product.productName}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {product.quantity}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    £{product.price}
                                </td>
                            </tr>
                            
                        </tbody></>)
                    })}
                    
                </table>
            </div>
            <div className="flex justify-end items-center">
                <div className="text-xl font-semibold">
                    Total: £{order?.total}
                </div>
            </div>
        </div>
    </div>

  )
}

export default OrderDetails
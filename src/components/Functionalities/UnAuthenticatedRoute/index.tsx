'use client'

import {Col, Row} from "antd";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import jwt from "jsonwebtoken"
import { useAppSelector } from "@/redux/hooks";

const unAuthenticatedRoute = (Component: React.FC, options?: {path: string}) => {
  const UnAuthenticatedRoute = () => {
    const auth = useAppSelector((state) => state.auth);
    const [loaded, setLoaded] = useState(false);

    const router = useRouter()

    const token = auth.token
    useEffect(() => {

      auth.isLoggedIn && token && jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET as string, (err, decoded)=>{
        if(err?.name === "TokenExpiredError"){
          return false

        }

        if(decoded){
          router.push(options?.path || "/dashboard");
        }
      })      
      setLoaded(true);
    }, []);
    return (
      <>
        {!loaded ? (
          <Row justify="center" align="middle" style={{height: "100vh"}}>
            <Col xs={24}>
              <h2 style={{textAlign: "center"}}>
                Loading...
              </h2>
            </Col>
          </Row>
        ) : (
          <Component />
        )}
      </>
    );
  };
  return UnAuthenticatedRoute;
};

export default unAuthenticatedRoute;

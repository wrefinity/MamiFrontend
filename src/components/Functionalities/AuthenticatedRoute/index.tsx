"use client"

import {Col, Row} from "antd";
import { useRouter } from "next/navigation";
import React, {useEffect, useState} from "react";
import * as jwt from "jsonwebtoken"
import { addToken, clearToken, logOutFalse } from "@/redux/slices/authSlice";
import { generateToken } from "@/lib/tokenHandler";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { JwtPayload } from "jsonwebtoken";

const authenticatedRoute = (Component: React.FC, options?: {path: string}) => {
  const AuthenticatedRoute = () => {
    const auth = useAppSelector((state) => state.auth);
    const [loaded, setLoaded] = useState(false);
    const [authenticated, setAuthenticated] = useState(false)

    const dispatch = useAppDispatch()
    const router = useRouter()
    useEffect(() => {
      if (!auth.isLoggedIn) {
        router.push(options?.path || "/auth/login");
      }

      const token = auth?.token
      if(!token){
        router.push("/auth/login")
      }else{
        try{
          const payload = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET) as JwtPayload
          if(auth.isLoggedIn){
            setAuthenticated(true)
            const generatedToken = generateToken(payload.id)
            dispatch(addToken(generatedToken))
          }
        }catch(err){
          if(err){
            dispatch(clearToken())
            dispatch(logOutFalse())
            router.push("/auth/login")
          }
        }
      }
      setLoaded(true);
    }, []);
    return (
      <>
        {!loaded && !authenticated ? (
          <Row justify="center" align="middle" style={{height: "100vh"}}>
            <Col xs={24}>
              <h2 style={{textAlign: "center"}}>
                Loading...
              </h2>
            </Col>
          </Row>
        ) : (
          authenticated ? <Component /> : (
          <Row justify="center" align="middle" style={{height: "100vh"}}>
            <Col xs={24}>
              <h2 style={{textAlign: "center"}}>
                Loading...
              </h2>
            </Col>
          </Row>
        )
        )}
      </>
    );
  };
  return AuthenticatedRoute;
};

export default authenticatedRoute;
"use client"
import { useState } from 'react'
import { createContext } from "react";
export const TabContext = createContext({
    tab: 'rec',
    setTab: (value: "rec" | "fol") => { }
});

type Props = { children: React.ReactNode }

export default function TabProvider({ children }: Props) {
    const [tab, setTab] = useState('rec');
    console.log("provider tab", tab)
    return (
        <TabContext.Provider value={{ tab, setTab }}>
            {children}
        </TabContext.Provider>
    )
}
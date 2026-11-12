import { social } from "@/types/main";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Fa from 'react-icons/fa';

export default function Footer({ socials, name }: { socials: social[], name: string }) {

    const { theme } = useTheme()

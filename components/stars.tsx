"use client";

import { WineType } from "@/data";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface StarProps {
  item: WineType
}

const StarsRating = ({ item }: StarProps) => {
  if (item.review === 1)
    return (
      <div className="flex gap-2 md:text-2xl md:p-4 pt-2">
        <FaStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
    );
  if (item.review === 2)
    return (
      <div className="flex gap-2 md:text-2xl md:p-4 pt-2">
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
    );
  if (item.review === 3)
    return (
      <div className="flex gap-2 md:text-2xl md:p-4 pt-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
      </div>
    );
  if (item.review === 4)
    return (
      <div className="flex gap-2 md:text-2xl p-4 pt-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>
    );
  if (item.review === 5)
    return (
      <div className="flex gap-2 md:text-2xl md:p-4 pt-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    );
};

export default StarsRating;
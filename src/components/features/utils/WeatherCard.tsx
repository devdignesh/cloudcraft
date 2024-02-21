import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WeatherCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  description?: string;
  subDescription?: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  icon,
  title,
  value,
  description,
  subDescription,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="flex justify-center text-4xl font-bold">{value}</p>
    </CardContent>
    {description && (
      <CardFooter className="flex flex-col items-start mt-auto pt-0">
        <p>{description}</p>
        {subDescription && <span>{subDescription}</span>}
      </CardFooter>
    )}
  </Card>
);

export default WeatherCard;
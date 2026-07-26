import { Flex, Skeleton } from "antd";

const LoadingSkeleton = ({ ammount = 1 }) => {
  return (
    <Flex gap="small" orientation="vertical">
      {Array.from({ length: ammount }).map((_, i) => (
        <Skeleton key={i} active />
      ))}
    </Flex>
  );
};

export default LoadingSkeleton;

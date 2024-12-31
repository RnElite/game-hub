import { Card, CardBody, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { SkeletonText } from './ui/skeleton'

const GameCardSkeleton = () => {
  return (
    <Card.Root width='250px'>
        <Skeleton height='200px'></Skeleton>
        <CardBody>
            <SkeletonText/>
        </CardBody>
        
    </Card.Root>
  )
}

export default GameCardSkeleton
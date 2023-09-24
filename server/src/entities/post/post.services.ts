import { prisma } from '@/prisma/client'

async function getAllPosts() {
    return prisma.post.findMany();
}

async function getPostById(id: number) {
    return prisma.post.findUnique({
        where: {
            id
        }
    })
}

export {
    getAllPosts,
    getPostById
}
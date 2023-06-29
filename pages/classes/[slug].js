import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { faculties } from "@/api/faculties"
import { motion } from "framer-motion"
import Link from "next/link"
import Class from "@/components/Classroom/Class"

const ClassesSlug = () => {
  const [eachClass, setEachClass] = useState()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const id = router.query.slug
  useEffect(() => {
    const getClasses = async () => {
      try {
        const data = faculties.filter((item) => {
          if (item.id == id) {
            return item.classes
          }
        })
        setEachClass(data[0].classes)
        console.log(eachClass)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    if (id) {
      setLoading(true)
      setTimeout(getClasses, 1000)
    }
  }, [id, eachClass])

  return (
    <>
      {loading && (
        <div className="h-[80vh] w-[100vw] flex justify-center items-center ">
          <Image alt="loader" width={200} height={200} src="/spinner.gif" />
        </div>
      )}
      {!loading && (
        <div className="container mx-auto p-5 w-[100%] flex flex-col items-center ">
          <Class item={eachClass} />
          {/* {eachClass?.map(({ id, batch }) => {
            <div key={id}>
              <div className="mb-14 ">
                <motion.h1
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl text-black font-extrabold font-[Arial]">
                  {batch}
                </motion.h1>
              </div>
            </div> */}
          {/* })} */}
        </div>
      )}
    </>
  )
}

export default ClassesSlug

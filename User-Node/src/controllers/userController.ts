import { Request, Response, NextFunction } from "express"
import bcrypt from "bcryptjs";
import User from "../models/user";


const UserContoller = {
    createSuperUser: async (req: Request , res: Response, next: NextFunction) => {
        const { firstName, lastName, mobile, email, password } = req.body
        const ExistedUser = await User.findOne({isDeleted: false, email: email})
        
        if(ExistedUser) {
            return res.status(400).json({
                message: "اطلاعات شما قبلا در سایت ثبت شده است!"
            })
        }
        
        const salt = await bcrypt.genSalt(12)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstName,
            lastName,
            mobile,
            email,
            password: hashPassword,
            isAdmin: true,
            isStaff: true

        })

        await newUser.save()
        return res.status(201).json({
            message: "کاربر ادمین با موفقیت ایجاد شد",
            data: {
                firstName,
                lastName,
                mobile,
                email
            }
        })
    },

    createUser: async (req: Request , res: Response, next: NextFunction) => {
        const { firstName, lastName, mobile, email, password } = req.body
        const ExistedUser = await User.findOne({isDeleted: false, email: email})
        
        if(ExistedUser) {
            return res.status(400).json({
                message: "اطلاعات شما قبلا در سایت ثبت شده است!"
            })
        }
        
        const salt = await bcrypt.genSalt(12)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstName,
            lastName,
            mobile,
            email,
            password: hashPassword,
            isAdmin: false,
            isStaff: false

        })

        await newUser.save()
        return res.status(201).json({
            message: "کاربر با موفقیت ایجاد شد",
            data: {
                firstName,
                lastName,
                mobile,
                email
            }
        })
    },

    listOfSuperUser: async (req: Request , res: Response, next: NextFunction) => {
        const superUser = await User.find({isDeleted: false, isAdmin: true, isStaff: true})
        return res.status(200).json(superUser)
    },

    listOfUser: async (req: Request , res: Response, next: NextFunction) => {
        const users = await User.find({isDeleted: false})
        return res.status(200).json(users)
    }
}

export default UserContoller
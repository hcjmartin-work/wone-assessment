import { PrismaClient } from '@prisma/client'

import seedJson from "./assessment-wone.json"

const prisma = new PrismaClient()

async function main() {
  // Seed the Admin User
  const admin = await prisma.user.upsert({
    where: { email: 'hcjmartin@gmail.com' },
    update: {},
    create: {
      email: 'hcjmartin@gmail.com',
      name: 'Admin',
      role: 'ADMIN'
    },
  })
  // Seed the first Form
  var initForm = await prisma.form.create({ 
    data: {
      ownerId: admin.id,
    },
  })
  // Seed the first Form Version with the provided assessment json
  const initFormVersion = await prisma.formVersion.create({
    data: {
      formId: initForm.id,
      content: seedJson
    }
  })
  // Set the current version of the form to the newly created version
  initForm = await prisma.form.update({
    where: { id: initForm.id },
    data: {
      currentFormVersionId: initFormVersion.id
    }
  })

  console.log({ admin, initForm, initFormVersion })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
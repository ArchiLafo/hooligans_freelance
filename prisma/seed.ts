import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const copywriting = await prisma.category.upsert({
    where: { label: 'Копирайтинг' },
    update: {},
    create: {
      name: 'Copywriting',
      label: 'Копирайтинг',
      description: 'Создание продающих текстов и контента. Уникальные и убедительные сообщения для продвижения продуктов и услуг.',
    },
  });

  const webdesign = await prisma.category.upsert({
    where: { label: 'Веб-дизайн' },
    update: {},
    create: {
      name: 'Webdesign',
      label: 'Веб-дизайн',
      description: 'Создание привлекательных и интуитивно понятных веб-сайтов с учетом пользовательского опыта и эстетики.',
    },
  });

  const translation = await prisma.category.upsert({
    where: { label: 'Перевод' },
    update: {},
    create: {
      name: 'Translation',
      label: 'Перевод',
      description: 'Перевод текстов на разные языки с сохранением смысла и стиля оригинала.',
    },
  });

  const illustrations = await prisma.category.upsert({
    where: { label: 'Иллюстрации' },
    update: {},
    create: {
      name: 'Illustrations',
      label: 'Иллюстрации',
      description: 'Создание качественных и оригинальных иллюстраций для использования в различных медиа-проектах.',
    },
  });

  const mobiledevelopment = await prisma.category.upsert({
    where: { label: 'Мобильная разработка' },
    update: {},
    create: {
      name: 'Mobiledevelopment',
      label: 'Мобильная разработка',
      description: 'Разработка мобильных приложений для разных платформ, учитывая лучшие практики и современные технологии.',
    },
  });

  const photo = await prisma.category.upsert({
    where: { label: 'Фотография' },
    update: {},
    create: {
      name: 'Photo',
      label: 'Фотография',
      description: 'Создание профессиональных фотографий для разных целей, включая портреты, природу, события и продукты.',
    },
  });
  
  const other = await prisma.category.upsert({
    where: { label: 'Другое' },
    update: {},
    create: {
      name: 'Other',
      label: 'Другое',
      description: 'Дополнительные услуги, которые не попадают в другие категории, такие как видеомонтаж, анимация, консалтинг и т.д.',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
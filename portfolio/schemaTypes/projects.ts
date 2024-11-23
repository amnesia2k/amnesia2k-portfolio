import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      description: 'Enter Project Title',
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Project Description',
      description: 'Enter Project Description',
    }),

    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      description: 'Enter Technologies used in this project',
      of: [
        {
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'projectUrl',
      type: 'url',
      title: 'Project URL',
      description: 'Enter URL of the project',
    }),

    defineField({
      name: 'githubUrl',
      type: 'url',
      title: 'GitHub URL',
      description: 'Enter URL of the GitHub repository',
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Project Image',
      description: 'Select an image for this project',
      options: {
        hotspot: true,
      },
    }),
  ],
})

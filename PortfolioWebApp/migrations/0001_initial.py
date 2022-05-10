# Generated by Django 4.0.3 on 2022-05-10 09:08

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Proyectos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill', models.CharField(max_length=50)),
                ('image', models.ImageField(null=True, upload_to='proyectos_img', verbose_name='Imagen Proyecto')),
                ('nombre', models.CharField(max_length=50, verbose_name='Nombre Proyecto')),
                ('repositorio', models.URLField(blank=True, null=True, verbose_name='Repositorio URL')),
                ('skill_hash', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=20), size=None, verbose_name='Tecnologías Usadas')),
                ('netlify', models.URLField(blank=True, null=True, verbose_name='Netlify URL')),
            ],
        ),
    ]

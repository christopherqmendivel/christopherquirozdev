# Generated by Django 4.0.3 on 2022-05-16 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PortfolioWebApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('correo', models.EmailField(max_length=254)),
                ('asunto', models.CharField(max_length=100)),
                ('mensaje', models.TextField()),
            ],
        ),
    ]
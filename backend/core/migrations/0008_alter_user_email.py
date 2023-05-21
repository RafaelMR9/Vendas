# Generated by Django 4.2.1 on 2023-05-10 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_alter_user_cnpj_alter_user_cpf_alter_user_endereco_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(error_messages={'unique': 'Já existe um Usuário com este Email.'}, max_length=254, unique=True),
        ),
    ]